import React from "react";
// import {faLink, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const Contact = (props) => {
    return (
        <section className={"cv-section"} id={"contact-section"}>
            <div className={"cv-section-" + props.side}>
                <Grid container spacing={2} justify="center" alignItems="center">
                    {/* <Grid className={"no-p"} item xs={12} md={11}>
                        <FontAwesomeIcon icon={faMapMarkedAlt}/> ‘Piyarisi’, Mihiripenna, Talpe, Galle, 80615, Sri Lanka
                    </Grid> */}
                    <Grid className={"no-p"} item xs={props.print ? 6 : 12} md={6}>
                        <FontAwesomeIcon icon={faTwitter} />
                        <Link href={"https://twitter.com/MrSupiri"} target={"_blank"}
                            underline={"none"} rel={"noopener"}> twitter.com/MrSupiri</Link>
                    </Grid>
                    <Grid className={"no-p"} item xs={props.print ? 5 : 12} md={5}>
                        <FontAwesomeIcon icon={faGithub} />
                        <Link href={"https://github.com/MrSupiri"} target={"_blank"}
                            underline={"none"} rel={"noopener"}> github.com/MrSupiri</Link>
                    </Grid>
                    <Grid className={"no-p"} item xs={props.print ? 6 : 12} md={6}>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <Link href={"https://www.linkedin.com/in/isalapiyarisi"} target={"_blank"}
                            underline={"none"} rel={"noopener"}> linkedin.com/in/IsalaPiyarisi</Link>
                    </Grid>
                    <Grid className={"no-p"} item xs={props.print ? 5 : 12} md={5}>
                        <FontAwesomeIcon icon={faLink} />
                        <Link href={"https://isala.me/resume"} target={"_blank"} underline={"none"}
                            rel={"noopener"}> isala.me</Link>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
};

export default Contact