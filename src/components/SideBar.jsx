import React, {Component} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ListItemText from "@material-ui/core/ListItemText";
import {faHome, faUserTie} from '@fortawesome/free-solid-svg-icons'
import ProfileImage from '../img/profile.jpg'
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


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
                    <Link component={RouterLink} to={"/about-me"}  color="inherit" underline={"none"}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faUserTie}/>
                            </ListItemIcon>
                            <ListItemText primary={"About Me"}/>
                        </ListItem>
                    </Link>
                </List>
            </div>
        );
    }
}

export default SideBar;