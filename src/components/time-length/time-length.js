import React from "react";
import Decrement from "../decrement";
import Increment from "../increment";

import './time-length.css';

function TimeLength(props) {

    const { type, length } = props;

    return (
        <div className={"time-length " + {type}}>
            <p className={type + "-label"}>{type}</p>
            <div>
                <Decrement {...props} />
                <div className={type + "-length"}>{length}</div>
                <Increment {...props} />
            </div>
        </div>
    )
}

export default TimeLength;