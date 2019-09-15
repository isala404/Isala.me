import React from "react";

const Skill = (props) => {
    return (
        <div className={"skill"}>
            <span><img className={"skill-img"} src={"https://cdn.iconicto.com/Isala.me/BrandIcons/"+props.icon} alt={props.name + " Logo"} width={"20px"} /> </span>
            <span className={"skill-name"}>{props.name}</span>
        </div>
    )
};

export default Skill