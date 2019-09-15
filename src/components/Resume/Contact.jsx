import React from "react";
import {faLink, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const Contact = (props) => {
    return (
        <section>
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item md={11}>
                    <FontAwesomeIcon icon={faMapMarkedAlt}/> ‘Piyarisi’, Mihiripenna, Talpe, Galle, 80615, Sri Lanka
                </Grid>
                <Grid item md={6}>
                    <FontAwesomeIcon icon={faTwitter}/> <Link href={"https://twitter.com/mrsupiri"} target={"_blank"}
                                                              underline={"none"}> twitter.com/mrsupiri</Link>
                </Grid>
                <Grid item md={5}>
                    <FontAwesomeIcon icon={faGithub}/> <Link href={"https://github.com/mrsupiri"} target={"_blank"}
                                                             underline={"none"}> github.com/mrsupiri</Link>
                </Grid>
                <Grid item md={6}>
                    <FontAwesomeIcon icon={faLinkedin}/> <Link href={"https://www.linkedin.com/in/isalapiyarisi/"}
                                                               target={"_blank"}
                                                               underline={"none"}> linkedin.com/in/isalapiyarisi</Link>
                </Grid>
                <Grid item md={5}>
                    <FontAwesomeIcon icon={faLink}/> <Link href={"https://isala.me"} target={"_blank"}
                                                           underline={"none"}> isala.me</Link>
                </Grid>
            </Grid>
        </section>
    )
};

export default Contact