import React from "react";

import "./increment.css";

function Increment(props) {

    const { onChange, length, state } = props;

    const increment = () => {
        if ((state != 'on') && (length < 60)) onChange(length + 1);
    }

    return (
        <button className="increment" onClick = {increment}>
            <i className="fa-solid fa-arrow-up-long"></i>
        </button>
    )
}

export default Increment;
