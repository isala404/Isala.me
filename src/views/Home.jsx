import React, {Component} from 'react';
import Sliders from "../components/HomePage/Sliders";
import StageOverlay from "../components/HomePage/StageOverlay";
import '../css/HomePage.css'
import {Helmet} from "react-helmet";

class Home extends Component {

    render() {
        return (
            <div>
                <Helmet>
                    <title>Isala Piyarisi</title>
                </Helmet>
                <Sliders/>
                <div className={"main-window"}>
                    <StageOverlay/>
                </div>
            </div>
        );
    }
}

export default Home;