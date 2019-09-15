import React from "react";
import SectionHead from "./SectionHead";
import {faLaptop} from "@fortawesome/free-solid-svg-icons";
import Project from "./Project";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";

const Projects = (props) => {
    return (
        <section>
            <SectionHead title={"Projects"} icon={faLaptop}/>
            <div className={"cv-section-right"}>
                <Project
                    name={"Rathumakara Music System"}
                    peroid={"Since Sept 2018"}
                    url={"https://github.com/mrsupiri/RathuMakaraFM-DiscordBot"}
                    description={"RathumakaraFM is the first Sri Lankan open-mic radio, I created the software for them which helps them the manage and run their programmes smoothly"}
                    tags={["Python", "Flask", "Discord.py", "Docker", "Youtube-DL"]}
                />
                <Project
                    name={"R2D2"}
                    peroid={"Oct 2017"}
                    url={"https://github.com/mrsupiri/R2D2/"}
                    description={"R2D2 is line following robot powered by OpenCV and machine learning. This was originally developed for RoboFest 2018"}
                    tags={["Python", "OpenCV", "Raspberry Pi", "Machine Learning", "Socket IO"]}
                />
                <Project
                    name={"LandSP"}
                    peroid={"Since Dec 2018"}
                    url={"https://landsp.lk/"}
                    description={"I was hired as the backend developer to redesign the website of Southern Province Land Commissioner's Department along with personal file management system"}
                    tags={["Python", "Django", "Postgresql", "S3", "Kubernetes"]}
                />
                <Project
                    name={"DownBit"}
                    peroid={"Since Aug 2016"}
                    url={"https://github.com/mrsupiri/DownBit/"}
                    description={"DownBit is an automated Youtube and Torrent downloader for raspberry pi." +
                    " This will automatically download youtube videos from your favorite creators during peek off hours which will save you peek time bandwidth"}
                    tags={["Python", "Youtube-DL", "SQLite", "Raspberry Pi", "Home Automation"]}
                />
                <span id={"portfolio-note"}>
                                        Visit
                                        <Link
                                            component={RouterLink} to={"/portfolio"}
                                            underline={"none"}> isala.me/portfolio
                                        </Link> to find the full list
                                    </span>
            </div>
        </section>
    )
};

export default Projects;