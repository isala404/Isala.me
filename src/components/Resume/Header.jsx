import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ProfileImage from '../../img/headshot.jpg'
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    bigAvatar: {
        width: 120,
        height: 120,
        borderRadius: 0,
    },
});


const Header = (props) => {
    const classes = useStyles();
    return (
        <section>
            <Grid container justify="center">
                <Grid item xs={3}>
                    <Avatar alt="Isala Piyarisi" src={ProfileImage} className={classes.bigAvatar}/>
                </Grid>
                <Grid id={"header-text"} item xs={9}>
                    <h1>Isala Piyarisi</h1>
                    <h2>DevOps Engineer</h2>
                    <h3>hello@isala.me</h3>
                </Grid>
            </Grid>
        </section>
    )
};

export default Header