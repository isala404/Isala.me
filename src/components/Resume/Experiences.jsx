import React from "react";
import SectionHead from "./SectionHead";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import Experience from "./Experience";

const Experiences = (props) => {
    return (
        <section className={"cv-section"}>
            <SectionHead title={"Professional Experience"} icon={faBriefcase} print={props.print}/>
            <div className={"cv-section-" + props.side}>
                <Experience
                    company={"ThinkSmart Solutions"}
                    positions={[
                        {
                            name: "Associate Software Engineer",
                            period: "Jun 2019 - Present",
                            responsibilities: [
                                "Cut down the cost of all of the web infrastructure by 50% by optimizing the infrastructure footprint.",
                                "Maintained all of ThinkSmart Solutions web infrastructure which runs on GCP, AWS and DigitalOcean.",
                                "Created realtime TCP socket API to link 3 frontend applications and sync the state.",
                                "Migrated existing monolithic backend to microservices."
                            ]
                        },
                        {
                            name: "Trainee Software Engineering",
                            period: "Jan 2019 - Jun 2019",
                            responsibilities: [
                                "Architected all of ThinkSmart Solutions infrastructure in GCP.",
                                "Created CI/CD system which reduced time taken to do a production released by around 60%.",
                                "Developed the multiple internal dashboards using ReactJS.",
                            ]
                        }
                    ]}
                />
                <Experience
                    company={"Southern Province Land Commissioner's Department"}
                    positions={[
                        {
                            name: "Webmaster",
                            period: "Dec 2018 - Present",
                            responsibilities: [
                                "Created backend for current website Southern Province Land Commissioner's Department.",
                                "Created web based HR system that help administrators manage employees more efficiently.",
                                "Maintaining the newly created website while regularly applying security patches."
                            ],
                        }
                    ]}

                />
                <Experience
                    company={"Black Assassins E-Sport"}
                    positions={[
                        {
                            name: "System Administrator",
                            period: "Mar 2015 - Present",
                            responsibilities: [
                                "Created and maintains world's 5th most popular CoD4 server which served more than 85,000 players over the years.",
                            ],
                        }
                    ]}
                />
            </div>
        </section>
    )
};

export default Experiences;