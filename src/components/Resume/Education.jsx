import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from '@fortawesome/free-solid-svg-icons'

const Education = (props) => {
    return (
        <div>
            <h3 className={"section-component-title"}>{props.institute}</h3>
            <h4 className={"section-component-subtitle"}>{props.peroid} | {props.course}</h4>
            {
                props.achievements &&
                <ul className={"fa-ul"} style={{ marginBottom: "1px" }}>
                    {props.achievements.map((responsibility, index) => {
                        return (
                            <li key={index}>
                                <span className="fa-li"><FontAwesomeIcon icon={faAward} /></span>
                                {responsibility}
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    );
};

export default Education