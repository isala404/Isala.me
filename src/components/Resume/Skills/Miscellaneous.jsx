import React from "react";
import Skill from "./Skill";

const Miscellaneous = (props) => {
    return (
        <div>
            <h4 className={"skill-heading"}>Miscellaneous</h4>
            <Skill name={"eBPF"} icon={"ebpf.svg"} />
            <Skill name={"GitOps"} icon={"gitops.svg"} />
            <Skill name={"CI/CD"} icon={"github-actions.svg"} />
            <Skill name={"Kube Builder"} icon={"kube-builder.svg"} />
            <Skill name={"Observability"} icon={"prometheus.svg"} />
        </div>
    )
};

export default Miscellaneous