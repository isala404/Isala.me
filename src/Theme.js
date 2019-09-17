import {createMuiTheme, makeStyles} from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            paper: '#000000'
        }
    },
});

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        }
    },
    appBar: {
        backgroundColor: '#000000',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
        // height: "calc(100vh - 56px)"
        height: "100vh"
    },
}));