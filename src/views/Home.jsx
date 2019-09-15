import React, {Component} from 'react';
import Sliders from "../components/HomePage/Sliders";
import StageOverlay from "../components/HomePage/StageOverlay";
import '../css/HomePage.css'

class Home extends Component {

    render() {
        return (
            <div>
                <Sliders/>
                <div className={"main-window"}>
                    <StageOverlay/>
                </div>
            </div>
        );
    }
}

export default Home;