import React from "react";
import SectionHead from "./SectionHead";
import {faLaptop} from "@fortawesome/free-solid-svg-icons";
import Project from "./Project";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";

const Projects = props => {
    let portfolioNote = null;
    if (process.env.NODE_ENV === 'development'){
        portfolioNote = (
            <span id={"portfolio-note"}>
                Visit <Link href={"https://github.com/mrsupiri"} underline={"none"}>isala.me/projects</Link> to find the full list
            </span>
        )
    }else{
        portfolioNote = (
            <span id={"portfolio-note"}>
                Visit <Link component={RouterLink} to={"/projects"} underline={"none"}>isala.me/projects</Link> to find the full list
            </span>
        )
    }

    return (
        <section className={"cv-section"}>
            <SectionHead title={"Projects"} icon={faLaptop} print={props.print}/>
            <div className={"cv-section-" + props.side}>
                <Project
                    name={"DJ System for RathumakaraFM"}
                    peroid={"Since Sept 2018"}
                    url={"https://github.com/mrsupiri/RathuMakaraFM-DiscordBot"}
                    description={
                        "RathumakaraFM is the first Sri Lankan open-mic radio, I created the software for them which helps them to manage their programs smoothly"
                    }
                    tags={["Python", "Flask", "Discord.py", "Docker", "Youtube-DL"]}
                />
                <Project
                    name={"R2D2"}
                    peroid={"Oct 2017"}
                    url={"https://github.com/mrsupiri/R2D2/"}
                    description={
                        "R2D2 is line following robot powered by OpenCV and machine learning. This was originally developed for RoboFest 2017 hosted by SLIIT"
                    }
                    tags={[
                        "Python",
                        "OpenCV",
                        "Raspberry Pi",
                        "Machine Learning",
                        "TCP Socket"
                    ]}
                />
                <Project
                    name={"LandSP"}
                    peroid={"Since Dec 2018"}
                    url={"https://landsp.lk/"}
                    description={
                        "I was hired as the backend developer to redesign the website of Southern Province Land Commissioner's Department along with their personal file file management system"
                    }
                    tags={["Python", "Django", "Postgresql", "S3", "Kubernetes"]}
                />
                <Project
                    name={"DownBit"}
                    peroid={"Since Aug 2016"}
                    url={"https://github.com/mrsupiri/DownBit/"}
                    description={
                        "DownBit is an automated Youtube and Torrent downloader for raspberry pi." +
                        " This will automatically download youtube videos from your favorite creators during peak off hours which will save you peak time bandwidth"
                    }
                    tags={[
                        "Python",
                        "Youtube-DL",
                        "SQLite",
                        "Raspberry Pi",
                        "Home Automation"
                    ]}
                />
                {portfolioNote}
            </div>
        </section>
    );
};

export default Projects;
