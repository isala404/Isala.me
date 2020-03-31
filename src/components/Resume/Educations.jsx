import React from "react";
import SectionHead from "./SectionHead";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Education from "./Education";

const Educations = props => {
  return (
    <section>
      <SectionHead title={"Education"} icon={faUserGraduate} print={props.print}/>
      <div className={"cv-section-" + props.side}>
        <Education
          institute={"University of Westminster"}
          peroid={"Sep 2018 - Jul 2023"}
          course={"BEng (Hons) Software Engineering"}
          achievements={[
            "Won First Place Hack19",
            "Won Third Place in Cutting Edge 2019 (Level 5)",
            "Finalist DigiEduHack 2019",
            'Won a Merit Prize on CodeFest "Hack me If you Can" Challenge',
            "Event Management Director, IET Campus Club"
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
  );
};

export default Educations;
