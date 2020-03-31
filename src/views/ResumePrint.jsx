import React from "react";
import '../css/Resume.css'
import Header from "../components/Resume/Header";
import Grid from "@material-ui/core/Grid";
import Contact from "../components/Resume/Contact";
import AboutMe from "../components/Resume/AboutMe";
import Experiences from "../components/Resume/Experiences";
import Hobbies from "../components/Resume/Hobbies";
import Educations from "../components/Resume/Educations";
import Projects from "../components/Resume/Projects";
import Skills from "../components/Resume/Skils";

const Resume = (props) => {
    return (
        <div style={{ width: "930px"}}>
            <Grid container>
                <Grid item xs={6}>
                    <Header side={"left"} />
                    <Contact side={"left"} print={true}/>
                    <AboutMe side={"left"} print={true} />
                    <Experiences side={"left"} print={true} />
                    <Hobbies side={"left"} print={true}/>
                </Grid>
                <Grid item xs={6}>
                    <Educations side={"right"} print={true}/>
                    <Projects side={"right"} print={true}/>
                    <Skills side={"right"} print={true}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Resume