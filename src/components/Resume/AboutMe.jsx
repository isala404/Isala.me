import React from "react";
import SectionHead from "./SectionHead";
import {faUserTie} from "@fortawesome/free-solid-svg-icons";

const AboutMe = (props) => {
    return (
        <section>
            <SectionHead title={"About me"} icon={faUserTie} print={props.print}/>
            <div className={"cv-section-" + props.side}>
                <p>
                    A DevOps engineer with experience of 5+ years, with added qualifications of being a
                    Software Developer of Python, JavaScript and GoLang. My primary skills includes
                    server-side programming, infrastructure architect and maintenance and designing minimalistic UI.
                </p>
                <p>
                    I have been working as a Freelancer, Employee and done many voluntary services for
                    both Local and International clients. I am known as a versatile character, a good
                    team player and a person who work under minimum supervision, both onsite and
                    remotely with good analytical skills.
                </p>
            </div>
        </section>
    )
};

export default AboutMe;