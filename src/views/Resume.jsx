import React from "react";
import '../css/Resume.css'
import Pencil from '../img/Pencil.png'
import Experience from "../components/Resume/Experience";
import {faBriefcase, faUserTie, faUserGraduate, faLaptop, faTools, faHiking} from '@fortawesome/free-solid-svg-icons'
import SectionHead from "../components/Resume/SectionHead";
import Header from "../components/Resume/Header";
import Grid from "@material-ui/core/Grid";
import Education from "../components/Resume/Education";
import Project from "../components/Resume/Project";
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Frontend from "../components/Resume/Skills/Frontend";
import Backend from "../components/Resume/Skills/Backend";
import SysAdmin from "../components/Resume/Skills/SysAdmin";
import SoftSkills from "../components/Resume/Skills/SoftSkills";
import Skill from "../components/Resume/Skills/Skill";
import Contact from "../components/Resume/Contact";

const Resume = (props) => {
    return (
        <div className={"main-window"}>
            <div id={"cv-wrapper"}>
                <div id={"cv-page"}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <section>
                                <Header/>
                            </section>
                            <section>
                                <SectionHead title={"About me"} icon={faUserTie}/>
                                <div className={"cv-section-left"}>
                                    A Devops engineer with experience of 5+ years, with added qualifications of being a
                                    Software Developer of Python, JavaScript and GoLang. My primary skills includes
                                    server-side programming, infrastructure architecting and maintenance minimalistic UI
                                    designing.<br/>
                                    I have been working as a Freelancer, Employee and done many voluntary services for
                                    both Local and International clients. I am known as a versatile character, a good
                                    team player and a person who work under minimum supervision, both onsite and
                                    remotely with good analytical skills.
                                </div>
                            </section>
                            <section>
                                <SectionHead title={"Professional Experience"} icon={faBriefcase}/>
                                <div className={"cv-section-left"}>
                                    <Experience
                                        company={"ThinkSmart Solutions"}
                                        position={"Associate Software Engineer"}
                                        peroid={"Jun 2019 - Present"}
                                        responsibilities={[
                                            "Cut down the cost of all of the web infrastructure by 50% by optimizing the infrastructure footprint.",
                                            "Maintain all of ThinkSmart Solutions web infrastructure which runs on GCP, AWS and DigitalOcean.",
                                        ]}
                                    />
                                    <Experience
                                        company={"ThinkSmart Solutions"}
                                        position={"Trainee Software Engineering"}
                                        peroid={"Jan 2019 - Jun 2019"}
                                        responsibilities={[
                                            "Architected all of ThinkSmart Solutions infrastructure in GCP.",
                                            "Created CI/CD system which reduced time taken to do a production released by around 60%.",
                                            "Developed the Self Registrations portal from Restaurant.",
                                            "Developed the MealFirst Operation Management Portal."
                                        ]}
                                    />
                                    <Experience
                                        company={"Southern Province Land Commissioner's Department"}
                                        position={"Webmaster"}
                                        peroid={"Dec 2018 - Present"}
                                        responsibilities={[
                                            "Created backend for current website Southern Province Land Commissioner's Department.",
                                            "Created web based HR system that help administrators manage employees more efficiently.",
                                            "Maintain the newly created website while regularly applying security patches."
                                        ]}
                                    />
                                    <Experience
                                        company={"Black Assassins E-Sport"}
                                        position={"System Administrator"}
                                        peroid={"Mar 2015 - Present"}
                                        responsibilities={[
                                            "Created and maintains world's 5th most popular CoD4 server which served more than 85,000 players over the years.",
                                        ]}
                                    />
                                </div>
                            </section>
                            <section>
                                <SectionHead title={"Education"} icon={faUserGraduate}/>
                                <div className={"cv-section-left"}>
                                    <Education
                                        institute={"University of Westminster"}
                                        peroid={"Jan 2019 - Jul 2023"}
                                        course={"BEng (Hons) Software Engineering"}
                                        achievements={[
                                            "Won First Place Hack19",
                                            "Won Third Place in Cutting Edge 2019 (Level 5)"
                                        ]}
                                    />
                                    <Education
                                        institute={"Richmond College, Galle"}
                                        peroid={"Jan 2005 - Aug 2018"}
                                        course={"Mathematics"}
                                        achievements={[
                                            "Acted as President of IT Society",
                                            "Acted as President of Robotics Society",
                                            "Awarded as most outstanding student of senior IT section"
                                        ]}
                                    />
                                </div>
                            </section>
                        </Grid>
                        <Grid item md={6}>
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
                            <section>
                                <SectionHead title={"Hobbies"} icon={faHiking}/>
                                <div className={"cv-section-right"}>
                                    <Grid container spacing={2} justify="center" alignItems="center">
                                        <Grid item md={4}>
                                            <Skill name={"Self Improving"} icon={"youtube.svg"}/>
                                        </Grid>
                                        <Grid item md={3}>
                                            <Skill name={"Gaming"} icon={"steam.svg"}/>
                                        </Grid>
                                        <Grid item md={4}>
                                            <Skill name={"Netflixing"} icon={"netflix.svg"}/>
                                        </Grid>
                                        <Grid item md={5}>
                                            <Skill name={"Contributing to FOSS"} icon={"github.svg"}/>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Skill name={"Robotics / Automation"} icon={"raspberrypi.svg"}/>
                                        </Grid>
                                    </Grid>
                                </div>
                            </section>
                            <section>
                                <Contact />
                            </section>
                        </Grid>
                    </Grid>
                </div>
                <img id={"pencil"} src={Pencil} alt={"Pencil"}/>
            </div>
        </div>
    );
};

export default Resume