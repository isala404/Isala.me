import React from "react";
import Typed from 'react-typed';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import { shuffle } from '../../Utils'


const HelloWorld = (props) => {
    const typedText = shuffle(
        [
            "I am a <strong>Cloud Engineer</strong>.",
            "I am a <strong>Nerd</strong>.",
            "I am the <strong>Chosen one</strong>.",
            "I am a <strong>Casual Gamer</strong>.",
            "I am a <strong>Backend Developer</strong>.",
            "I am a <strong>Mr. Supiri</strong>.",
            "I am <strong>Iron Man</strong>.",
            "I am a <strong>Data Scientist</strong>.",
            "btw i use <strong style='color:#4194d1'>Arch</strong>.",
        ]
    );
    return (
        <Box display="flex" flexDirection="column" justifyContent={"center"} height={"100%"}>
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
            <Box fontSize="2.5em" textAlign={"center"} marginTop={"1em"}>
                <Button variant="contained" color="secondary" href={"https://twitter.com/messages/819485959-819485959?text=Hello there!"} target={"_blank"} rel={"noopener"}>
                    Slide into my DMs
            </Button>
            </Box>
        </Box>
    )
};

export default HelloWorld