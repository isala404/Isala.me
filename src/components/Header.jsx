import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <AppBar position="fixed" className={props.classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Isala Piyarisi
                </Typography>
                <Box ml="auto">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={props.handleDrawerToggle}
                        className={props.classes.menuButton}
                    >
                        <FontAwesomeIcon icon={faBars}/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
};

export default Header