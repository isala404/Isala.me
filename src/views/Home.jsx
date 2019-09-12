import React, {Component, Fragment} from 'react';
import Sliders from "../components/HomePage/Sliders";
import StageOverlay from "../components/HomePage/StageOverlay";
import '../css/HomePage.css'

class Home extends Component {

    render() {
        return (
            <Fragment>
                <Sliders/>
                <div className={"main-window"}>
                    <StageOverlay/>
                </div>
            </Fragment>
        );
    }
}

export default Home;