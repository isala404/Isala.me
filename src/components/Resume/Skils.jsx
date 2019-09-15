import React from "react";
import SectionHead from "./SectionHead";
import {faTools} from "@fortawesome/free-solid-svg-icons";
import SoftSkills from "./Skills/SoftSkills";
import Grid from "@material-ui/core/Grid";
import Frontend from "./Skills/Frontend";
import Backend from "./Skills/Backend";
import SysAdmin from "./Skills/SysAdmin";

const Skills = (props) => {
    return(
        <section>
            <SectionHead title={"Skills"}  icon={faTools}/>
            <div className={"cv-section-"+ props.side}>
                <Grid container  justify="space-around">
                    <Grid item md={"auto"}>
                        <Frontend/>
                    </Grid>
                    <Grid item md={"auto"}>
                        <Backend/>
                    </Grid>
                    <Grid item md={"auto"}>
                        <SysAdmin/>
                    </Grid>
                </Grid>
                <SoftSkills/>
            </div>
        </section>
    )
};

export default Skills;