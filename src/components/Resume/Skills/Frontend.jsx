import React from "react";
import Skill from "./Skill";

const Frontend = (props) => {
    return (
        <div>
            <h3 className={"skill-heading"}>Front-End</h3>
            <Skill name={"React"} icon={"react.svg"} />
            {/* <Skill name={"Bootstrap"} icon={"bootstrap.svg"}/> */}
            <Skill name={"HTML/CSS"} icon={"html5.svg"} />
            <Skill name={"Apollo"} icon={"apollo.svg"} />
            <Skill name={"GraphQL"} icon={"graphql.svg"} />
            {/* <Skill name={"Flutter"} icon={"flutter.svg"} /> */}
            {/* <Skill name={"Electron"} icon={"electron.svg"}/> */}
        </div>
    )
};

export default Frontend