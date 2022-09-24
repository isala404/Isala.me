import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ProfileImage from '../../img/headshot.jpg'
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    bigAvatar: {
        width: 130,
        height: 140,
        borderRadius: 0,
    },
    bigAvatarImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "0 20%",
    }
});


const Header = (props) => {
    const classes = useStyles();
    return (
        <section>
            <Grid container justify="center">
                <Grid item xs={3}>
                    <Avatar alt="Isala Piyarisi" src={ProfileImage} className={classes.bigAvatar} imgProps={{ className: classes.bigAvatarImage }} />
                </Grid>
                <Grid id={"header-text"} item xs={9}>
                    <h1>Isala Piyarisi</h1>
                    <h2>Cloud Engineer</h2>
                    <h3>mail@isala.me</h3>
                    {process.env.REACT_APP_PHONE && <h4>{process.env.REACT_APP_PHONE}</h4> }
                </Grid>
            </Grid>
        </section>
    )
};

export default Header