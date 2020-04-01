import React from "react";
import SectionHead from "./SectionHead";
import {faUserCheck} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";

const EmailLink = (props) => {
    return <a href={"mailto:"+props.email} target="_blank" rel="noopener noreferrer">{props.email}</a>
};

const References = (props) => {
    return (
        <section className={"cv-section"}>
            <SectionHead title={"References"} icon={faUserCheck} print={props.print}/>
            <div className={"cv-section-" + props.side}>
                {props.print && process.env.NODE_ENV === 'development' ?
                    <Grid container spacing={1} justify="center" alignItems="center">
                        <Grid item xs={6}>
                            <h3 className={"section-component-title"}>{process.env.REACT_APP_REFERENCES_1_NAME}</h3>
                            <h4 className={"section-component-subtitle"}>{process.env.REACT_APP_REFERENCES_1_TITLE}</h4>
                            <span>{process.env.REACT_APP_REFERENCES_1_PHONE}</span><br/>
                            <span><EmailLink email={process.env.REACT_APP_REFERENCES_1_EMAIL} /></span>
                        </Grid>
                        <Grid item xs={6}>
                            <h3 className={"section-component-title"}>{process.env.REACT_APP_REFERENCES_2_NAME}</h3>
                            <h4 className={"section-component-subtitle"}>{process.env.REACT_APP_REFERENCES_2_TITLE}</h4>
                            <span>{process.env.REACT_APP_REFERENCES_2_PHONE}</span><br/>
                            <span><EmailLink email={process.env.REACT_APP_REFERENCES_2_EMAIL} /></span>
                        </Grid>
                    </Grid>
                    : <div style={{textAlign: "center"}}>
                        <h3 className={"section-component-title"}>References will be available at request</h3>
                        <h4 className={"section-component-subtitle"}>Drop a email to <EmailLink email={"hello@isala.me"} /> request for references</h4>
                    </div>
                }
            </div>
        </section>
    )
};

export default References;