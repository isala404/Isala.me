import React from "react";
import Skill from "./Skill";

const SysAdmin = (props) => {
    return (
        <div>
            <h3 className={"skill-heading"}>Sys-Admin</h3>
            <Skill name={"GNU+Linux"} icon={"linux.svg"} />
            <Skill name={"Kubernetes"} icon={"kubernetes.svg"} />
            <Skill name={"SQL/NoSQL"} icon={"postgresql.svg"} />
            <Skill name={"DO/GCP/AWS"} icon={"gcp.svg"} />
            <Skill name={"CI/CD Automation"} icon={"github-actions.svg"} />
        </div>
    )
};

export default SysAdmin