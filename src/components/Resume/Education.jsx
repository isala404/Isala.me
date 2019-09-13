import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAward} from '@fortawesome/free-solid-svg-icons'

const Education = (props) => {
    return (
        <div>
            <h3 className={"experience-company"}>{props.institute}</h3>
            <h4 className={"experience-position"}>{props.peroid} | {props.course}</h4>
            {
                props.achievements &&
                <ul className={"fa-ul"}>
                    {props.achievements.map((responsibility, index) => {
                        return (
                            <li key={index}>
                                <span className="fa-li"><FontAwesomeIcon icon={faAward}/></span>
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