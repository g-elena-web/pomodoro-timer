import React from "react";
import Decrement from "../decrement";
import Increment from "../increment";

import './time-length.css';

function TimeLength(props) {

    const { type, length, state } = props;

    return (
        <div className={(state === 'on') ? "time-length time-length-active" : "time-length"}>
            <p className="label">{type}</p>
            <div className="set-length">
                <Decrement {...props} />
                <div className="length ">{length}</div>
                <Increment {...props} />
            </div>
        </div>
    )
}

export default TimeLength;