import React from "react";
import Skill from "./Skill";

const Programing = (props) => {
    return (
        <div>
            <h4 className={"skill-heading"}>Programing</h4>
            <Skill name={"Python"} icon={"python.svg"} />
            <Skill name={"GoLang"} icon={"golang.svg"} />
            <Skill name={"Rust"} icon={"rust.svg"} />
            <Skill name={"Bash"} icon={"bash.svg"} />
            <Skill name={"TypeScript"} icon={"typescript.svg"} />
        </div>
    )
};

export default Programing