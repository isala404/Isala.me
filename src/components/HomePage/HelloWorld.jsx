import React from "react";
import Typed from 'react-typed';
import Box from "@material-ui/core/Box";
import {shuffle} from '../../Utils'


const HelloWorld = (props) => {
    const typedText = shuffle(
        [
            "I am a  <strong>Full Stack Developer</strong>.",
            "I am a  <strong>System Administrator</strong>.",
            "I am a  <strong>DevOps Engineer</strong>.",
            "I am a  <strong>Geek</strong>.",
            "I am a  <strong>Hardware Hacker</strong>.",
            "I am a  <strong>New Thinker</strong>.",
            "I am a  <strong>SoftCore Gamer</strong>.",
            "I am a  <strong>Freelancer</strong>.",
            "I am a  <strong>Penetration Tester</strong>.",
            "I am a  <strong>Tech Enthusiast</strong>.",
            "I am a  <strong>Data Scientist</strong>.",
        ]
    );
    return (
        <Box display="flex" flexDirection="column"  justifyContent={"center"} height={"100%"}>
            <Box fontSize="2.5em" textAlign={"center"}>
                Hello World !
            </Box>
            <h1 id={"IntroHeading"}>
                I am Isala Piyarisi
            </h1>
            <Box fontSize="2.2em" textAlign={"center"}>
                <Typed
                    strings={typedText}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    smartBackspace
                />
            </Box>
        </Box>
    )
};

export default HelloWorld