import React from "react";
import '../css/Resume.css'
import Pencil from '../img/Pencil.png'
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
        <div className={"main-window"}>
            <div id={"cv-wrapper"}>
                <div id={"cv-page"}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Header/>
                            <Contact/>
                            <AboutMe/>
                            <Experiences/>
                            <Hobbies/>
                        </Grid>
                        <Grid item md={6}>
                            <Educations/>
                            <Projects/>
                            <Skills/>
                        </Grid>
                    </Grid>
                </div>
                <img id={"pencil"} src={Pencil} alt={"Pencil"}/>
            </div>
        </div>
    );
};

export default Resume