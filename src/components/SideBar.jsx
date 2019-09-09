import React, {Component} from 'react';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ListItemText from "@material-ui/core/ListItemText";
import { faInbox, faEnvelope } from '@fortawesome/free-solid-svg-icons'

class SideBar extends Component {
    render() {
        return (
            <div>
                <div className={this.props.toolbar} />
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <FontAwesomeIcon icon={faInbox} /> : <FontAwesomeIcon icon={faEnvelope} />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <FontAwesomeIcon icon={faInbox} /> : <FontAwesomeIcon icon={faEnvelope} />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default SideBar;