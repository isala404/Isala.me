import React from "react";
import SectionHead from "./SectionHead";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Experience from "./Experience";

const Experiences = (props) => {
    return (
        <section className={"cv-section"}>
            <SectionHead title={"Professional Experience"} icon={faBriefcase} print={props.print} />
            <div className={"cv-section-" + props.side}>
            <Experience
                    company={"WSO2"}
                    positions={[
                        {
                            name: "Observability Engineer",
                            period: "Jun 2022 - Present",
                            responsibilities: [
                                "Worked on a Kubernetes observability platform based upon Linux kernel's eBPF subsystem.",
                                "Working on extending OpenTelemetry Collector to fit company use cases.",
                            ],
                        }
                    ]}
                />
                <Experience
                    company={"SUSE"}
                    positions={[
                        {
                            name: "Google Summer of Code Student",
                            period: "May 2021 - Aug 2021",
                            responsibilities: [
                                "Created a FOSS to tool help plan or debug banzai logging pipelines within Rancher."
                            ],
                        }
                    ]}
                />
                <Experience
                    company={"ThinkSmart Solutions"}
                    positions={[
                        {
                            name: "DevOps Engineer",
                            period: "Jul 2020 - May 2022",
                            responsibilities: [
                                "Migrated legacy static storage service to GCP and reduced load times up to 8 times.",
                                "Planned and migrated a NodeJS monolith to a distributed system written in Go.",
                                "Recreated database schema from scratch which made some queries resolve up to 15 times faster and noticed a significant drop in resource usage.",
                            ]
                        }, {
                            name: "Associate Software Engineer",
                            period: "Jul 2019 - Jun 2020",
                            responsibilities: [
                                "Cut down the cost of all of the web infrastructure by 50% by optimizing the infrastructure footprint.",
                                "Maintained all of the ThinkSmart Solutions web infrastructure which runs on GCP, AWS, and DigitalOcean.",
                                "Created real-time TCP socket API to link 3 frontend applications and sync the state.",
                            ]
                        },
                        {
                            name: "Trainee Software Engineering",
                            period: "Jan 2019 - Jun 2019",
                            responsibilities: [
                                "Provisioned and managed all resources need to run the EatMealFirst app in GCP.",
                                "Created CI/CD system which reduced the time taken to do a production release by around 60%.",
                                // "Developed multiple internal operations tools using ReactJS.",
                            ]
                        }
                    ]}
                />
                <Experience
                    company={"Black Assassins E-Sport"}
                    positions={[
                        {
                            name: "System Administrator",
                            period: "Mar 2015 - Jun 2020",
                            responsibilities: [
                                "Maintained the world's 5th most popular CoD4 server which served more than 85,000 unique players over the years.",
                            ],
                        }
                    ]}
                />
            </div>
        </section>
    )
};

export default Experiences;
