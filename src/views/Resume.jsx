import React from "react";
import '../css/Resume.css'
import Pencil from '../img/Pencil.png'
import Experience from "../components/Resume/Experience";
import {faBriefcase, faUserTie, faUserGraduate, faLaptop} from '@fortawesome/free-solid-svg-icons'
import SectionHead from "../components/Resume/SectionHead";
import Header from "../components/Resume/Header";
import Grid from "@material-ui/core/Grid";
import Education from "../components/Resume/Education";

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
                                <div className={"cv-section"}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut dicta enim laborum
                                    nesciunt officiis quam voluptatem. Amet dolorem expedita iusto laborum libero minus
                                    quia rerum veritatis! Libero officiis, porro?
                                </div>
                            </section>
                            <section>
                                <SectionHead title={"Professional Experience"} icon={faBriefcase}/>
                                <div className={"cv-section"}>
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
                                            "Set up all of ThinkSmart Solutions web infrastructure in AWS and Google Cloud Platform.",
                                            "Created CI/CD system which reduced time taken to do a production released by around 60%.",
                                            "Developed the Self Registrations portal from Restaurant.",
                                            "Developed the MealFirst Operation Management Portal."
                                        ]}
                                    />
                                    <Experience
                                        company={"Southern Province Land Commissioner's Department"}
                                        position={"Webmaster"}
                                        peroid={"Oct 2018 - Present"}
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
                                <div className={"cv-section"}>
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