import React from "react";
import SectionHead from "./SectionHead";
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import Education from "./Education";

const Educations = (props) => {
    return(
        <section>
            <SectionHead title={"Education"} icon={faUserGraduate}/>
            <div className={"cv-section-"+ props.side}>
                <Education
                    institute={"University of Westminster"}
                    peroid={"Jan 2019 - Jul 2023"}
                    course={"BEng (Hons) Software Engineering"}
                    achievements={[
                        "Won First Place Hack19",
                        "Won Third Place in Cutting Edge 2019 (Level 5)"
                    ]}
                />
                <Education
                    institute={"Richmond College, Galle"}
                    peroid={"Jan 2005 - Aug 2018"}
                    course={"Mathematics"}
                    achievements={[
                        "Acted as President of IT Society",
                        "Acted as President of Robotics Society",
                        "Awarded as most outstanding student of senior IT section"
                    ]}
                />
            </div>
        </section>
    )
};

export default Educations;