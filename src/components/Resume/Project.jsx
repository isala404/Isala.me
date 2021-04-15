import React from "react";
import Link from "@material-ui/core/Link";

const Project = (props) => {

    return (
        <div className={"projects"}>
            <div >
                <h3 style={{ display: "inline-block" }} className={"section-component-title"}>{props.name}</h3>
                <Link href={props.url} rel={"noopener"} target={"_blank"} underline={"none"}>
                    {" "} - {props.url.slice(2)}
                </Link>
            </div>
            <p className={"section-component-description"}>{props.description}</p>
            {props.tags &&
                props.tags.map((tag, index) => {
                    return <span key={index} className={"project-tag"}>{tag}</span>
                })
            }
        </div>
    )
};

export default Project;