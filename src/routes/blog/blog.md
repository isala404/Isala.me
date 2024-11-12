# Proxyless Scale-to-Zero with eBPF
Over the past few years eBPF have become swift army knife of a technology. If can dream of it there is real possibility you could actual build it. Well at least a proof of concept of it.
So few months ago I was working on a system allow scaling of continerized workload on deamond from zero to be intergrated into WSO2's Choreo Platform. To do this we opted into using KEDA as control system becuase it's kind of the industry defactor right now. But while building on top of it we ran into few "inconveniences". Since those ain't blockers we didn't divated from following that path but I always wondered what if there was better way?

After few days of twinkling around I thought of a system which I can build using eBPF to get rid of these inconveniences. 

Originally I was invited to present this in KubeCon NA 24 at Cilium + eBPF day. But unfortunately my entry VISA to US got denied, with a heavy heart, I had to slide this dream I've held onto for the past five years aside. May be next year??

Anyway sad story aside In this article I will work you though limitations we came across while build on top of KEDA and how eBPF can help to mitigate these

## What is Scale to Zero

At WSO2 we run a PaaS called Choreo, looking at the stats we noitce there are lot of customer workloads what are mostly idle for 90+% of the time but yet we have to bill them for all the resuces usage. Since we felt like this is total wastage from both our and our customers end we started looking to a solution optimze this. Enter Scale to Zero.

As of now almost all cloud providers offer a some sort of "serverless" solution where you deploy a app on the service but you pay only when the app is active. This is thanks to a system called scalling to zero. If you look carefully almost all these serverless serivces require you a HTTP endpoint.

When a new request hit this endpoint that request get intercepted by proxy and trigger a single to scale up the backend you wrote. While the backend is scalling up the request is held in place in the proxy. Once the backend is active the request get passed to the backend and the reponse is sent the client via the proxy as well we called this a cold start. Then consequent requests pass though the proxy.

After a while if you HTTP endpoint stop reciving requests, the system will automatically scale down the backend to save resouce hence saving you money.

## Where KEDA comes in
Kubernetes Event-driven Autoscaling (KEDA) is a addon compoment for kubeantes which allows setup complex scalling patterns, kubenates by deafult allow us to perform horitizal pod auto scaling by reacting to either CPU or memory chanages. But with KEDA we can scale application virtual based on any event. Among those scallers KEDA http-addon is scallning method within KEDA which allows to scale applications running in kubeantes from or to zero depending on incoming HTTP traffic.

But as mentioned above it comes with a cost of a proxy. Every time a new requests comes it has to go though proxy. Which adds a single point of failure for all the incoming traffic to the cluster. On top of that with KEDA it's really hard to get service to service auto scaling right as if we are calling service within the cluster using a cluster IP we have to make sure that requests goes KEDA proxy rather than the service it self.

One of the main diffculities we had to over come when using KEDA http proxy regarding how we apply kubeantes network policies to limit certin pod to pod comminications while still allowing within cluster auto scallning.

So I thought there should be a better way.

## eBPF to rescue
While battling with this problem, I though if we could get rid of this proxy it could solve all of our problems. Then it hit me, what if we could hold the requests at Layer 3 and scale up the service and let the request pass though once the service is full operational. So I quickly wrote a small POC with aya-rs to test this theroy.

### Architecture
<Image TO BE REPLACED>

In here I have coded an XDP driver which does a two simple things. I has a HashMap with all the ClusterIPs of services which are currntly scaled down. When a new packet hit this driver it checks if the incoming packet's destination ip is within that hash map, if it is it sends a single to scaler running in the user space and drop the packet. If it's not the packet get forward.
This dump approche works supricing well on any TCP based services with a higher TCP connect time out. Reason for this is when a SYN packet reaches the device driver it trigger a scale up and it get dropped. So the caller assumed the packet got lost and send another SYN packet in bit when that reaches the server the backend would be scaled up and user space part of this Scaler updated the hashmap to remove the IP from the blocklist so the packet it forwarded to the correct service. Which in case returns an ACK and establish the connection.
After a while by monitoring the network activiy of the target pods we can scale it down and add the service IP to the hash map of the XDP driver again so it retigger the scale up flow once the.

With this approche we completly iliumnated the need for a intermindate proxy which not only improve the latenacy and thoughput but also get rid of lot more headache around scale to zero setups like enforcing network policies
As a bonus, this same approche can be used to scale up not only HTTP server, but also databases as well. Reason for this is this approche is applied at layer 3 which make it layer 7 protocal indipendant.
You can find the full code for my proof of concept from:
https://github.com/isala404/scale-to-zero-ebpf
As a future work I am hoping to figure out what kind of impact I could have if I was able to directly intergate with something like Cilium CNI, so the scale to zero can be easily adapted by the masses which at a global scale even can have envimomental impact as well.
