import React from "react";
import SectionHead from "./SectionHead";
import {faHiking} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import Skill from "./Skills/Skill";

const Hobbies = (props) => {
    return(
        <section>
            <SectionHead title={"Hobbies"} icon={faHiking}/>
            <div className={"cv-section-"+ props.side}>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={6} md={4}>
                        <Skill name={"Self Improving"} icon={"youtube.svg"}/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Skill name={"Gaming"} icon={"steam.svg"}/>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Skill name={"Netflixing"} icon={"netflix.svg"}/>
                    </Grid>
                    <Grid item xs={6} md={5}>
                        <Skill name={"Contributing to FOSS"} icon={"github.svg"}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Skill name={"Robotics / Automation"} icon={"raspberrypi.svg"}/>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
};

export default Hobbies;