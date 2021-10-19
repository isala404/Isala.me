import React from "react";
import SectionHead from "./SectionHead";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Education from "./Education";

const Educations = props => {
  return (
    <section className={"cv-section"} >
      <SectionHead title={"Education"} icon={faUserGraduate} print={props.print} />
      <div className={"cv-section-" + props.side}>
        <Education
          institute={"University of Westminster"}
          peroid={"Sep 2018 - Jul 2022"}
          course={"BEng (Hons) Software Engineering"}
          achievements={[
            "Event Director, IET Campus Club.",
            "Won 2nd place Hack19 global event.",
            "Won 3rd place in Cutting Edge 2019 (Level 5).",
            'Won a Merit Prize on CodeFest "Hack me If you Can".',
            "Finalist DigiEduHack 2019 and Data Storm 1.0.",
            // "Published a research paper on IEEEXplore"
          ]}
        />
        <Education
          institute={"Richmond College, Galle"}
          peroid={"Jan 2005 - Aug 2018"}
          course={"Mathematics"}
          achievements={[
            "Acted as President of IT Society.",
            "Acted as President of Robotics Society.",
            "Awarded as the most outstanding student of senior IT section."
          ]}
        />
      </div>
    </section>
  );
};

export default Educations;
