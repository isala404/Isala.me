import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'

const Experience = (props) => {
    return (
        <div>
            <h3 className={"section-component-title"}>{props.company}</h3>
            <h4 className={"section-component-subtitle"}>{props.peroid} | {props.position}</h4>
            <ul className={"fa-ul"}>
                {props.responsibilities.map((responsibility, index) => {
                    return (
                        <li key={index}>
                            <span className="fa-li"><FontAwesomeIcon icon={faCheckCircle}/></span>
                            {responsibility}
                        </li>
                    )
                } )}
            </ul>

        </div>
    );
};

export default Experience