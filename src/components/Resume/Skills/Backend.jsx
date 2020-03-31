import React from "react";
import Skill from "./Skill";

const Backend = (props) => {
    return (
        <div>
            <h3 className={"skill-heading"}>Back-End</h3>
            <Skill name={"Python"} icon={"python.svg"}/>
            {/* <Skill name={"GoLang"} icon={"golang.svg"}/> */}
            <Skill name={"TypeScript"} icon={"typescript.svg"}/>
            <Skill name={"GraphQL"} icon={"graphql.svg"}/>
            <Skill name={"Java"} icon={"java.svg"}/>
            <Skill name={"PHP"} icon={"php.svg"}/>
        </div>
    )
};

export default Backend