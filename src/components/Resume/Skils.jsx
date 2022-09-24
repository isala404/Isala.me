import React from "react";
import SectionHead from "./SectionHead";
import { faTools } from "@fortawesome/free-solid-svg-icons";
// import SoftSkills from "./Skills/SoftSkills";
import Grid from "@material-ui/core/Grid";
import Programing from "./Skills/Programing";
import Infrastructure from "./Skills/Infrastructure";
import Miscellaneous from "./Skills/Miscellaneous";

const Skills = (props) => {
    return (
        <section className={"cv-section"} >
            <SectionHead title={"Skills"} icon={faTools} print={props.print} />
            <div className={"cv-section-" + props.side}>
                <Grid container justify="space-around">
                    <Grid item md={"auto"}>
                        <Programing />
                    </Grid>
                    <Grid item md={"auto"}>
                        <Infrastructure />
                    </Grid>
                    <Grid item md={"auto"}>
                        <Miscellaneous />
                    </Grid>
                </Grid>
                {/* <SoftSkills/> */}
            </div>
        </section>
    )
};

export default Skills;