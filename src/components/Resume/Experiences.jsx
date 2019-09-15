import React from "react";
import SectionHead from "./SectionHead";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import Experience from "./Experience";

const Experiences = (props) => {
    return(
        <section>
            <SectionHead title={"Professional Experience"} icon={faBriefcase}/>
            <div className={"cv-section-left"}>
                <Experience
                    company={"ThinkSmart Solutions"}
                    position={"Associate Software Engineer"}
                    peroid={"Jun 2019 - Present"}
                    responsibilities={[
                        "Cut down the cost of all of the web infrastructure by 50% by optimizing the infrastructure footprint.",
                        "Maintain all of ThinkSmart Solutions web infrastructure which runs on GCP, AWS and DigitalOcean.",
                    ]}
                />
                <Experience
                    company={"ThinkSmart Solutions"}
                    position={"Trainee Software Engineering"}
                    peroid={"Jan 2019 - Jun 2019"}
                    responsibilities={[
                        "Architected all of ThinkSmart Solutions infrastructure in GCP.",
                        "Created CI/CD system which reduced time taken to do a production released by around 60%.",
                        "Developed the Self Registrations portal from Restaurant.",
                        "Developed the MealFirst Operation Management Portal."
                    ]}
                />
                <Experience
                    company={"Southern Province Land Commissioner's Department"}
                    position={"Webmaster"}
                    peroid={"Dec 2018 - Present"}
                    responsibilities={[
                        "Created backend for current website Southern Province Land Commissioner's Department.",
                        "Created web based HR system that help administrators manage employees more efficiently.",
                        "Maintain the newly created website while regularly applying security patches."
                    ]}
                />
                <Experience
                    company={"Black Assassins E-Sport"}
                    position={"System Administrator"}
                    peroid={"Mar 2015 - Present"}
                    responsibilities={[
                        "Created and maintains world's 5th most popular CoD4 server which served more than 85,000 players over the years.",
                    ]}
                />
            </div>
        </section>
    )
};

export default Experiences;