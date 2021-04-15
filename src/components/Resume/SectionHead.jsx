import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    blueAvatar: {
        margin: "5px 10px 0 20px",
        color: '#000',
        backgroundColor: "#fff",
        padding: 0,
        display: 'inline',
        fontSize: '18px',
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
                        <FontAwesomeIcon icon={props.icon} />
                    </Avatar>
                </div>
                <h2 className={"section-head-title"} style={props.print ? { paddingLeft: "5px", fontSize: "18px" } : { fontSize: "18px" }}>{props.title}</h2>
            </div>
            <hr className={"section-head-hr"} />
        </Fragment>
    )
};

export default SectionHead
