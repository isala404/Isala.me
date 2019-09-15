import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    blueAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: blue[700],
        padding: 10,
        display: 'inline',
        fontSize: 'small',
        width: "35px",
        height: "35px"
    },
}));

const SectionHead = (props) => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={"section-head"}>
                <div className={"section-head-icon"}>
                    <Avatar className={classes.blueAvatar}>
                        <FontAwesomeIcon icon={props.icon}/>
                    </Avatar>
                </div>
                <h2 className={"section-head-title"}>{props.title}</h2>
            </div>
            <hr className={"section-head-hr"}/>
        </Fragment>
    )
};

export default SectionHead
