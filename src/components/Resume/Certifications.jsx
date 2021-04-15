import React from "react";
import SectionHead from "./SectionHead";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Certification from "./Certification";
import Publication from "./Publication";
// import Link from "@material-ui/core/Link";
// import { Link as RouterLink } from "react-router-dom";

const Certifications = props => {
    return (
        <section className={"cv-section"}>
            <SectionHead title={"Certifications / Publications"} icon={faCertificate} print={props.print} />
            <div className={"cv-section-" + props.side}>
                <Certification
                    name={"Associate Cloud Engineer"}
                    issuer={"Google Cloud"}
                    peroid={"Jan 2021 - Jan 2023"}
                    credential={"FWMQG8ETGRUV"}
                    url={"//credential.net/01bf3574-f2ac-48db-ad46-eee50b477abd"}
                />
                <Publication
                    name={"Speculo Research Paper"}
                    issuer={"IEEE"}
                    peroid={"1/1/2021"}
                    url={"//ieeexplore.ieee.org/document/9298340"}
                />
            </div>
        </section>
    );
};

export default Certifications;
