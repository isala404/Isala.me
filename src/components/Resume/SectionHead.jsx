import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Avatar from "@material-ui/core/Avatar";
import {useStyles} from '../../Theme'


const SectionHead = (props) => {
    const classes = useStyles();
    return (
        <div className={"section-head"}>
            <div className={"section-head-icon"}>
                <Avatar className={classes.blueAvatar}>
                    <FontAwesomeIcon icon={props.icon}/>
                </Avatar>
            </div>
            <h2 className={"section-head-title"}>{props.title}</h2>
            <hr className={"section-head-hr"}/>
        </div>
    )
};

export default SectionHead
