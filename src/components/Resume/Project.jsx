import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import Link from "@material-ui/core/Link";

const Project = (props) => {

    return (
        <div className={"projects"}>
            {
                props.url
                    ?
                    <Link href={props.url} target={"_blank"} underline={"none"}><h3
                        className={"section-component-title"}>{props.name} <FontAwesomeIcon icon={faExternalLinkAlt}/></h3>
                    </Link>
                    :
                    <h3 className={"section-component-title"}>{props.name}</h3>
            }
            <h4 className={"section-component-subtitle"}>{props.peroid}</h4>
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