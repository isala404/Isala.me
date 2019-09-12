import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Header from "./components/Header";
import {MuiThemeProvider} from '@material-ui/core/styles';
import NavBar from "./components/NavBar";
import {useStyles, theme} from './Theme'
import './css/App.css'
import {Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import {TransitionGroup, CSSTransition} from "react-transition-group";

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
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={300}
                                classNames={"fade"}>
                                <Switch location={location}>
                                    <Route path="/" exact component={Home}/>
                                    <Route path="/about-me" exact component={AboutMe}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}/>
                </main>
            </div>
        </MuiThemeProvider>
    );
};

export default App;
