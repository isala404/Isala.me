# Proxyless Scale-to-Zero with eBPF

In recent years, eBPF has become the Swiss Army knife of technology. If you can dream it, there’s a real possibility you can build it—at least as a proof of concept.

A few months ago, I started working on a system that would allow us to scale containerized workloads on demand, from zero, for WSO2's Choreo Platform. We decided to use KEDA as the control system, as it’s widely regarded as the industry standard. However, as we built on top of it, we encountered some "inconveniences". Although these weren’t showstoppers, I couldn’t shake the feeling there might be a more better way.

After a few days of tinkering, I developed a system using eBPF that could potentially overcome these issues.

Originally, I was invited to present this talk at KubeCon NA 2024 during the Cilium + eBPF Day. Unfortunately, my visa application to the U.S. was denied, and with a heavy heart, I had to set aside the dream I’d held for 5+ years. Maybe next year?

Anyway, sad story aside, in this article, I'll walk you through the limitations we encountered with KEDA and how eBPF could help us tackle them.

## What is Scale to Zero?

At WSO2, we run a PaaS called Choreo. From analyzing our usage data, we noticed that some customer workloads remain idle over 90% of the time, yet we’re still have to bill them for the associated resource usage. This felt wasteful, both for us and for our customers. So, we began looking for ways to make this process more efficient, leading us to the concept of **Scale to Zero**.

The principle behind "Scale to Zero" aligns closely with what many cloud providers now offer through their "serverless" solutions. In serverless models, you deploy an app but only pay when it’s actively in use. The magic behind this model lies in the ability to scale down services to zero resources when idle, and then scale them back up when a request is made.

Typically, serverless services rely on a single HTTP endpoint. When a new request arrives at this endpoint, it’s intercepted by a proxy that triggers the backend to scale up. While the backend is scaling, the proxy holds the incoming request in place. Once the backend is ready, the proxy forwards the request, and the backend responds. This delay, known as a "cold start," only occurs on the first request. Subsequent requests go directly through the proxy to the backend.

After a period of inactivity, the system automatically scales the backend down to zero, saving resources and reducing costs.

## Where KEDA Comes In

Kubernetes Event-driven Autoscaling (KEDA) is an add-on for Kubernetes that enables more complex scaling patterns than what Kubernetes natively provides. By default, Kubernetes supports horizontal pod autoscaling based on CPU and memory usage. KEDA expands this to allow scaling based on custom events, with an HTTP add-on that enables autoscaling from zero based on incoming HTTP traffic.

However, KEDA introduces some challenges. Because it uses a proxy, every new request must go through it, which can introduce latency and create a single point of failure for incoming traffic. Additionally, implementing inter-service autoscaling in KEDA can be complicated. For example, if services within the cluster need to communicate via cluster IPs, we must ensure that requests are routed through the KEDA proxy rather than directly to the service.

One of the biggest challenges we faced with KEDA’s HTTP proxy was in applying Kubernetes network policies to limit certain pod-to-pod communication while still allowing autoscaling within the cluster.

So, I thought, maybe there’s a better way.

## eBPF to the Rescue

As I tinker with these issues, it occurred to me that eliminating the proxy could solve many of these problems. What if we could intercept requests at Layer 3, scale up the service, and only allow the request to pass through once the service is fully operational? I quickly wrote a small proof of concept using the `aya-rs` library to test this theory.

### Architecture
[Image Placeholder]

Here’s the setup: I’ve created an XDP driver that maintains a simple hash map of Cluster IPs for services currently scaled down. When a new packet reaches this driver, it checks if the destination IP is in this hash map. If it is, the driver signals a user-space scaler to initiate scaling and then drops the packet. If not, the packet is allowed to proceed.

This simple approach works surprisingly well for any TCP-based service with a high TCP connection timeout. Why? when a SYN packet reaches the device driver, it triggers a scale-up and is then dropped. The client, assuming packet loss, resends the SYN packet. By the time the second SYN packet arrives, the backend has scaled up, and the hash map is updated to remove the IP from the blocklist, allowing the packet to reach the service. This time, an ACK is returned, establishing the connection.

After some idle time, we monitor network activity on the target pods. When they become idle, we scale them down and re-add the service IP to the XDP driver’s hash map, ready to re-trigger the scale-up process for the next incoming request.

With this approach, we’ve eliminated the need for an intermediate proxy. Not only does this improve latency and throughput, but it also simplifies handling network policies in a Scale-to-Zero setup.

An additional benefit is that this approach can be used to scale up a wide range of services, including HTTP servers and databases. Since it operates at Layer 3, it’s protocol-independent, making it applicable to a variety of application types.

You can find the full code for my proof of concept here: [https://github.com/isala404/scale-to-zero-ebpf](https://github.com/isala404/scale-to-zero-ebpf).

As a next step, I’m exploring the potential benefits of integrating this with a solution like Cilium CNI. Such integration could make Scale-to-Zero more accessible on a larger scale, potentially even contributing to environmental impact reduction.
