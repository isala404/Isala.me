import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import '../css/AboutMe.css'
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from 'react-router-dom';
import {Helmet} from "react-helmet";


const useStyles = makeStyles(theme => ({
    avatar: {
        margin: 10,
        width: 300,
        height: 300,
        [theme.breakpoints.down('sm')]: {
            width: 150,
            height: 150,
        },
    },
    contentGrid: {
        marginTop: "40px",
        order: 0,
        [theme.breakpoints.down('sm')]: {
            order: 1,
            marginTop: "0px",
        },
    },
    imageGrid: {
        marginLeft: "30px",
        order: 1,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            order: 0,
        },
    }
}));

const AboutMe = (props) => {
    const classes = useStyles(undefined);
    return (
        <div className={"main-window"} style={{fontSize: "1.5em"}}>
            <Helmet>
                <title>Isala Piyarisi | Resume</title>
            </Helmet>
            <Box display="flex" overflow={"hidden"} id={"about-me-wrapper"} flexDirection="column"
                 justifyContent={"center"} alignItems={"center"}>
                <h1 className={"no-m"} style={{textAlign: "center"}}>~$ whoami</h1>
                <Grid container justify="center" alignItems="center">
                    <Grid item md={6} className={classes.contentGrid}>
                        <h2 className={"no-m"}>Isala Piyarisi</h2>
                        <h4 className={"no-m"}>DevOps Engineer at ThinkSmart IT Solutions Pvt. Ltd</h4>
                        <p>
                            A DevOps engineer with experience of 5+ years, with added qualifications of being a Software
                            Developer of Python, JavaScript and GoLang. My primary skills include server-side
                            programming, infrastructure architect and maintenance and designing minimalistic UI.
                        </p>
                        <p>
                            I have been working as a Freelancer, Employee and done many voluntary services for both
                            Local and International clients. I am known as a versatile character, a good team player and
                            a person who works under minimum supervision, both onsite and remotely with good analytical
                            skills.
                        </p>
                        <Link href={"mailto:hire@isala.me"} target="_blank" color="inherit" underline={"none"}>
                            <Button variant="contained" color="secondary" style={{marginRight: "10px"}}>Hire Me</Button>
                        </Link>
                        <Link component={RouterLink} to={"/resume"} color="inherit" underline={"none"}>
                            <Button variant="contained" color="primary">Resume</Button>
                        </Link>
                    </Grid>
                    <Grid item className={classes.imageGrid}>
                        <Avatar alt="Isala Piyarisi" src={"https://static.isala.me/portfolio/face.jpg"}
                                className={classes.avatar}/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default AboutMe;