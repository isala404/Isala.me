import React, {useEffect} from 'react';
import {Redirect} from "react-router-dom";
// import Box from "@material-ui/core/Box";

const Projects = (props) => {
    // TODO : This is madness complete the Project page ASAP
    useEffect(() => {
        window.open("https://github.com/mrsupiri", '_blank');
    }, []);
    return <Redirect to="/resume"/>
    // return (
    //     <div className={"main-window"}>
    //         <Box display="flex" overflow={"hidden"} id={"about-me-wrapper"} flexDirection="column"
    //              justifyContent={"center"} alignItems={"center"}>
    //             <h1 style={{fontAlign: 'center', fontSize: '3em'}}>This page still Under development</h1>
    //         </Box>
    //     </div>
    // );
};

export default Projects;