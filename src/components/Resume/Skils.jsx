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
            <SectionHead title={"Skills"} icon={faTools}/>
            <div className={"cv-section-right"}>
                <SoftSkills/>
                <Grid container spacing={2}>
                    <Grid item md={"auto"}>
                        <Frontend/>
                    </Grid>
                    <Grid item md={"auto"}>
                        <Backend/>
                    </Grid>
                    <Grid item md={5}>
                        <SysAdmin/>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
};

export default Skills;