import React from "react";
import Link from "@material-ui/core/Link";

const Certification = (props) => {

    return (
        <div className={"publications"}>
            <h3 className={"section-component-title"}>{props.name}</h3>
            <Link href={props.url} rel={"noopener"} target={"_blank"} underline={"none"}>
                {props.url.slice(2)}
            </Link>
            <h4 className={"section-component-subtitle"}>Publisher:  {props.issuer}</h4>
            <h4 className={"section-component-subtitle"}>Publication date: {props.peroid}</h4>
        </div>
    )
};

export default Certification;