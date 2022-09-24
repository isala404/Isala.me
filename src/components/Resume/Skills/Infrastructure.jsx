import React from "react";
import Skill from "./Skill";

const Infrastructure = (props) => {
    return (
        <div>
            <h4 className={"skill-heading"}>Infrastructure</h4>
            <Skill name={"GNU+Linux"} icon={"linux.svg"} />
            <Skill name={"Kubernetes"} icon={"kubernetes.svg"} />
            <Skill name={"Google Cloud"} icon={"gcp.svg"} />
            <Skill name={"Azure"} icon={"azure.svg"} />
            <Skill name={"Terraform"} icon={"terraform.svg"} />
        </div>
    )
};

export default Infrastructure