import React, {Component} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ListItemText from "@material-ui/core/ListItemText";
import ProfileImage from '../img/profile.jpg'
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Divider from "@material-ui/core/Divider";
import {faHome, faUserTie, faFileAlt, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import Box from "@material-ui/core/Box";
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faInstagram,
    faFacebook,
    faSpotify,
    faReddit
} from "@fortawesome/free-brands-svg-icons"
import Grid from "@material-ui/core/Grid";

class SideBar extends Component {
    render() {
        return (
            <div>
                <img alt={""} src={ProfileImage} id={"profile-img"}/>
                <List>
                    <Link component={RouterLink} to={"/"} color="inherit" underline={"none"}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faHome}/>
                            </ListItemIcon>
                            <ListItemText primary={"Home"}/>
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link component={RouterLink} to={"/about-me"} color="inherit" underline={"none"}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faUserTie}/>
                            </ListItemIcon>
                            <ListItemText primary={"About Me"}/>
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link component={RouterLink} to={"/resume"} color="inherit" underline={"none"}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faFileAlt}/>
                            </ListItemIcon>
                            <ListItemText primary={"Resume"}/>
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link component={RouterLink} to={"/portfolio"} color="inherit" underline={"none"}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faBriefcase}/>
                            </ListItemIcon>
                            <ListItemText primary={"Portfolio"}/>
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link component={RouterLink} to={"/blog"} color="inherit" underline={"none"}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faBriefcase}/>
                            </ListItemIcon>
                            <ListItemText primary={"Blog"}/>
                        </ListItem>
                    </Link>
                    <Divider/>
                </List>

                <Box id={"social-links"} display="flex" overflow={"hidden"} flexDirection="column"
                     alignItems={"center"}>
                    <Grid className={"no-p"} container justify="space-around">
                        <Grid item md={"auto"}>
                            <Link href={"https://github.com/mrsupiri"} target={"_blank"} underline={"none"}
                                  color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://twitter.com/mrsupiri"} target={"_blank"} underline={"none"}
                                  color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://www.instagram.com/mrsupiri"} target={"_blank"} underline={"none"}
                                  color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://www.linkedin.com/in/isalapiyarisi"} target={"_blank"}
                                  underline={"none"} color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://www.facebook.com/isalapi"} target={"_blank"} underline={"none"}
                                  color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://open.spotify.com/user/mrsupiri"} target={"_blank"} underline={"none"}
                                  color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon icon={faSpotify}/>
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://www.reddit.com/user/supiri_"} target={"_blank"} underline={"none"}
                                  color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon icon={faReddit}/>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        );
    }
}

export default SideBar;