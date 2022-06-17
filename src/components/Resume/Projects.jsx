import React from "react";
import SectionHead from "./SectionHead";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import Project from "./Project";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const Projects = props => {
    let portfolioNote = null;
    if (process.env.NODE_ENV === 'development') {
        portfolioNote = (
            <span id={"portfolio-note"}>
                Visit <Link href={"//github.com/MrSupiri"} underline={"none"}>isala.me/projects</Link> to find the full list
            </span>
        )
    } else {
        portfolioNote = (
            <span id={"portfolio-note"}>
                Visit <Link component={RouterLink} to={"/projects"} underline={"none"}>isala.me/projects</Link> to find the full list
            </span>
        )
    }

    return (
        <section className={"cv-section"}>
            <SectionHead title={"Projects"} icon={faLaptop} print={props.print} />
            <div className={"cv-section-" + props.side}>
                <Project
                    name={"Lazy-Koala"}
                    peroid={"May 2022"}
                    url={"//github.com/MrSupiri/lazy-koala"}
                    description={
                        "Lazy Koala is a lightweight framework for root cause analysis in distributed systems. This provides all the tooling needed for RCA from instrumentation to storage and real-time processing of telemetry data using deep learning."
                    }
                    tags={[
                        "eBPF",
                        "Kubernetes",
                        "Linux",
                        "RCA",
                        "Rust",
                        "GoLang",
                        "Observability",
                    ]}
                />
                <Project
                    name={"RLPP"}
                    peroid={"Since Jul 2021"}
                    url={"//github.com/MrSupiri/rancher-logging-pipeline-plumber"}
                    description={
                        "This is a tool that can be used to debug logging pipelines built using Rancher Logging. Once installed users can choose a Flow or ClusterFlow along with a pod to simulate and users also can set the log messages that are emitted by the pod."
                    }
                    tags={[
                        "GoLang",
                        "Kubebuilder",
                        "Rancher",
                        "Kubernetes",
                        "DevTool",
                        "GSoC",
                    ]}
                />
                <Project
                    name={"Speculo"}
                    peroid={"Since Sept 2018"}
                    url={"//github.com/MrSupiri/speculo"}
                    description={
                        "Speculo utilizes a DC-IGN for indexing faces found in video footage. It allows you to browse through these footages by the faces found in them rather than thousands of frames."
                    }
                    tags={["Python", "Tensorflow", "Kubernetes", "OpenCV", "Microservices"]}
                />
                {/* <Project
                    name={"R2D2"}
                    peroid={"Oct 2017"}
                    url={"//github.com/MrSupiri/R2D2"}
                    description={
                        "A line following robot powered by OpenCV and machine learning. This was originally developed for RoboFest 2017 hosted by SLIIT."
                    }
                    tags={[
                        "Python",
                        "OpenCV",
                        "Raspberry Pi",
                        "Machine Learning",
                        "Socket"
                    ]}
                /> */}
                <Project
                    name={"LandSP"}
                    peroid={"Since Dec 2018"}
                    url={"//landsp.lk"}
                    description={
                        "Developed and maintains the production version of southern province land commissioner's department website."
                    }
                    tags={["Python", "Django", "Postgresql", "S3", "Serverless"]}
                />
                {/* <Project
                    name={"DownBit"}
                    peroid={"Aug 2016"}
                    url={"//github.com/MrSupiri/DownBit"}
                    description={
                        "DownBit is an automated Youtube and Torrent downloader for raspberry pi." +
                        " This will automatically download youtube videos from your favorite creators during peak off hours which will save you peak time bandwidth"
                    }
                    tags={[
                        "Python",
                        "Youtube-DL",
                        "SQLite",
                        "Raspberry Pi",
                        "Home Automation"
                    ]}
                /> */}
                {portfolioNote}
            </div>
        </section>
    );
};

export default Projects;
