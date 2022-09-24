import React from "react";
import SectionHead from "./SectionHead";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Education from "./Education";

const Educations = props => {
  return (
    <section className={"cv-section"} >
      <SectionHead title={"Education"} icon={faUserGraduate} print={props.print} />
      <div className={"cv-section-" + props.side} style={{margin: "5px -8px 5px 19px"}}>
        <Education
          institute={"University of Westminster"}
          peroid={"Sep 2018 - Jul 2022"}
          course={"BSc (Hons) Computer Science"}
          achievements={[
            "Graduated with first class honours (79.37% overall average).",
            "Event Director, IET Campus Club.",
            "Won 2nd place in Hack19 global event.",
            "Won 3rd place in Cutting Edge 2019 and 2022.",
            'Won a Merit Prize on CodeFest "Hack me If you Can".',
            // "Finalist DigiEduHack 2019 and Data Storm 1.0.",
            // "Published a research paper on IEEEXplore"
          ]}
        />
        <Education
          institute={"Richmond College, Galle"}
          peroid={"Jan 2005 - Aug 2018"}
          course={"Mathematics"}
          achievements={[
            "Acted as the President of IT Society.",
            "Acted as the President of Robotics Society.",
            "Awarded the most outstanding student in the senior IT section."
          ]}
        />
      </div>
    </section>
  );
};

export default Educations;
