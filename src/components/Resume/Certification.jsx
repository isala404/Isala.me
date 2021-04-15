import React from "react";
import Link from "@material-ui/core/Link";

const Certification = (props) => {

    return (
        <div className={"Certifications"}>
            <h3 className={"section-component-title"}>{props.name}</h3>
            <Link href={props.url} rel={"noopener"} target={"_blank"} underline={"none"}>
                {props.url.slice(2)}
            </Link>
            <h4 className={"section-component-subtitle"}>Issuer:  {props.issuer}</h4>
            <h4 className={"section-component-subtitle"}>Peroid: {props.peroid}</h4>
            <h4 className={"section-component-subtitle"}>Credential: {props.credential}</h4>
        </div>
    )
};

export default Certification;