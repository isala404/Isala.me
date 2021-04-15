import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Experience = (props) => {
    return (
        <div>
            <h3 className={"section-component-title"}>{props.company}</h3>
            {props.positions.map((position) => {
                return (
                    <React.Fragment>
                        <h4 className={"section-component-subtitle"}>{position.period} | {position.name}</h4>
                        <ul className={"fa-ul"} style={{ marginBottom: "10px" }}>
                            {position.responsibilities.map((responsibility, index) => {
                                return (
                                    <li key={index}>
                                        <span className="fa-li"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                        {responsibility}
                                    </li>
                                )
                            })}
                        </ul>
                    </React.Fragment>
                )
            })}


        </div>
    );
};

export default Experience