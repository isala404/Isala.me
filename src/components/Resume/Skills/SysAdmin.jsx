import React from "react";
import Skill from "./Skill";

const SysAdmin = (props) => {
    return (
        <div>
            <h3 className={"skill-heading"}>Sys-Admin</h3>
            <Skill name={"GUN+Linux"} icon={"linux.svg"}/>
            <Skill name={"Kubernetes"} icon={"kubernetes.svg"}/>
            <Skill name={"SQL/NoSQL"} icon={"mongodb.svg"}/>
            <Skill name={"DO/GCP/AWS"} icon={"gcp.svg"}/>
            <Skill name={"CI/CD Automation"} icon={"travis.svg"}/>
        </div>
    )
};

export default SysAdmin