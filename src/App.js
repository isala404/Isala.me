import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Header from "./components/Header";
import {MuiThemeProvider} from '@material-ui/core/styles';
import NavBar from "./components/NavBar";
import {useStyles, theme} from './Theme'
import {Route} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import './css/CSSTransitions.css'
import './css/App.css'
import Routes from './Routes'

const App = (props) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline/>
                <Hidden smUp implementation="css">
                    <Header classes={classes} handleDrawerToggle={handleDrawerToggle}/>
                </Hidden>
                <NavBar classes={classes} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
                <main className={classes.content}>
                    <Hidden smUp implementation="css">
                        <div className={classes.toolbar}/>
                    </Hidden>
                    {Routes.map(({path, Component}) => (
                        <Route key={path} exact path={path}>
                            {({match}) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={1000}
                                    classNames="page"
                                    unmountOnExit
                                >
                                    <Component/>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                </main>
            </div>
        </MuiThemeProvider>
    );
};

export default App;
