import React, {Component} from 'react';
import Sliders from "../components/HomePage/Sliders";
import StageOverlay from "../components/HomePage/StageOverlay";
import '../css/HomePage.css'
import {TransitionGroup} from "react-transition-group";

class Home extends Component {

    render() {
        return (
            <TransitionGroup>
                <Sliders/>
                <div className={"main-window"}>
                    <StageOverlay/>
                </div>
            </TransitionGroup>
        );
    }
}

export default Home;