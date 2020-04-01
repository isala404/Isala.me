import React from "react";
import SectionHead from "./SectionHead";
import {faHiking} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import Skill from "./Skills/Skill";

const Hobbies = (props) => {
    return (
        <section className={"cv-section"}>
            <SectionHead title={"Hobbies"} icon={faHiking} print={props.print}/>
            <div className={"cv-section-" + props.side}>
                <Grid container spacing={1} justify="center" alignItems="center">
                    <Grid item xs={props.print ? 4 : 6} md={4}>
                        <Skill name={"Self Improving"} icon={"audible.svg"}/>
                    </Grid>
                    <Grid item xs={props.print ? 3 : 6} md={3}>
                        <Skill name={"Gaming"} icon={"steam.svg"}/>
                    </Grid>
                    <Grid item xs={props.print ? 4 : 6} md={4}>
                        <Skill name={"Netflixing"} icon={"netflix.svg"}/>
                    </Grid>
                    <Grid item xs={props.print ? 5 : 6} md={5}>
                        <Skill name={"Contributing to FOSS"} icon={"github.svg"}/>
                    </Grid>
                    <Grid item xs={props.print ? 6 : 6} md={6}>
                        <Skill name={"Robotics / Automation"} icon={"raspberrypi.svg"}/>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
};

export default Hobbies;