import React, { Component, Fragment } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListItemText from "@material-ui/core/ListItemText";
// import ProfileImage from '../img/profile.jpg'
import ProfileImage from '../img/bitmoji.png'
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faInstagram,
    faFacebook,
    faSpotify,
    faMedium
} from "@fortawesome/free-brands-svg-icons"
import Grid from "@material-ui/core/Grid";
import Routes from '../Routes'

class SideBar extends Component {
    render() {
        return (
            <div>
                <img alt={"Isala Piyarisi"} src={ProfileImage} id={"profile-img"} style={{ padding: "1.3em" }} />
                <List style={{ marginBottom: "10px" }}>
                    {Routes.map((route) => {
                        return (
                            <Fragment key={route.path}>
                                <Link component={route.disabled ? null : RouterLink} to={route.path} color="inherit" underline={"none"}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <FontAwesomeIcon size={"lg"} icon={route.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary={route.name} />
                                    </ListItem>
                                </Link>
                                <Divider />
                            </Fragment>
                        )
                    })}
                </List>

                <Box id={"social-links"} display="flex" overflow={"hidden"} flexDirection="column"
                    alignItems={"center"}>
                    <Grid className={"no-p"} container justify="space-around">
                        <Grid item md={"auto"}>
                            <Link href={"https://github.com/MrSupiri"} target={"_blank"} underline={"none"}
                                color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon size={"lg"} icon={faGithub} />
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://twitter.com/MrSupiri"} target={"_blank"} underline={"none"}
                                color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon size={"lg"} icon={faTwitter} />
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://medium.com/@isalapiyarisi"} target={"_blank"} underline={"none"}
                                color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon size={"lg"} icon={faMedium} />
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://www.instagram.com/mrsupiri"} target={"_blank"} underline={"none"}
                                color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon size={"lg"} icon={faInstagram} />
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://www.linkedin.com/in/isalapiyarisi"} target={"_blank"}
                                underline={"none"} color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon size={"lg"} icon={faLinkedin} />
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://www.facebook.com/isalapi"} target={"_blank"} underline={"none"}
                                color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon size={"lg"} icon={faFacebook} />
                            </Link>
                        </Grid>
                        <Grid item md={"auto"}>
                            <Link href={"https://open.spotify.com/user/mrsupiri"} target={"_blank"}
                                underline={"none"}
                                color={"inherit"} rel={"noopener"}>
                                <FontAwesomeIcon size={"lg"} icon={faSpotify} />
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        );
    }
}

export default SideBar;