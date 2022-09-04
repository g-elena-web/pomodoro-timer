import React from "react";

import "./increment.css";

function Increment(props) {

    const { type, onChange, length, state } = props;

    const increment = () => {
        if ((state != 'on') && (length < 60)) onChange(length + 1);
    }

    return (
        <button className={type + "-increment"} onClick = {increment}>
            <i className="fa-solid fa-arrow-up-long"></i>
        </button>
    )
}

export default Increment;
