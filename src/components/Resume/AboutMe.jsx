import React from "react";
import SectionHead from "./SectionHead";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const AboutMe = (props) => {
    return (
        <section className={"cv-section"} >
            <SectionHead title={"About me"} icon={faUserTie} print={props.print} />
            <div className={"cv-section-" + props.side}>
                <p style={{ marginBlockStart: 0, marginBlockEnd: 0, textAlign: "justify" }} >
                    A passionate engineer whose journey started by trying to set up a dedicated COD4 server to play with friends, after school hours and quickly getting interested in the ways of Linux. My ultimate life mission is to use my engineering skills to better humanity.
                </p>
            </div>
        </section>
    )
};

export default AboutMe;