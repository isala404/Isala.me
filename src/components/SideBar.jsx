import React, {Component} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ListItemText from "@material-ui/core/ListItemText";
import ProfileImage from '../img/profile.jpg'
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Divider from "@material-ui/core/Divider";
import {faHome, faUserTie, faFileAlt, faBriefcase} from '@fortawesome/free-solid-svg-icons'


class SideBar extends Component {
    render() {
        return (
            <div>
                <img alt={""} src={ProfileImage} id={"profile-img"}/>
                <List>
                    <Link component={RouterLink} to={"/"}  color="inherit" underline={"none"}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faHome}/>
                            </ListItemIcon>
                            <ListItemText primary={"Home"}/>
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link component={RouterLink} to={"/about-me"}  color="inherit" underline={"none"}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faUserTie}/>
                            </ListItemIcon>
                            <ListItemText primary={"About Me"}/>
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link component={RouterLink} to={"/resume"}  color="inherit" underline={"none"}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faFileAlt}/>
                            </ListItemIcon>
                            <ListItemText primary={"Resume"}/>
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link component={RouterLink} to={"/portfolio"}  color="inherit" underline={"none"}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faBriefcase}/>
                            </ListItemIcon>
                            <ListItemText primary={"Portfolio"}/>
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link component={RouterLink} to={"/blog"}  color="inherit" underline={"none"}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faBriefcase}/>
                            </ListItemIcon>
                            <ListItemText primary={"Blog"}/>
                        </ListItem>
                    </Link>
                    <Divider />
                </List>
            </div>
        );
    }
}

export default SideBar;