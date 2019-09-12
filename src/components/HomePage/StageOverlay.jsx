import React from "react";
import HelloWorld from "./HelloWorld";
import Box from "@material-ui/core/Box";

const StageOverlay = (props) => {
    return (
        <Box display="flex" overflow={"hidden"} flexDirection="column" justifyContent={"center"} height={"100vh"} alignItems={"center"}>
            <div id={"StageOverlay"}>
                <HelloWorld/>
            </div>
        </Box>
    )
};

export default StageOverlay