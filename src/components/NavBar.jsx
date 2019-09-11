import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import SideBar from "./SideBar";
import React from "react";

const NavBar = (props) => {
    return(
        <nav className={props.classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={props.mobileOpen}
                    onClose={props.handleDrawerToggle}
                    classes={{
                        paper: props.classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <SideBar toolbar={props.classes.toolbar}/>
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: props.classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <SideBar toolbar={props.classes.toolbar}/>
                </Drawer>
            </Hidden>
        </nav>
    )
}

export default NavBar