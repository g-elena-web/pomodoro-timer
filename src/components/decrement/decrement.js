import React from "react";

import './decrement.css';

function Decrement(props) {

    const { type, onChange, length, state } = props;

    const decrement = () => {
        if ((state != 'on') && (length > 1)) onChange(length - 1);
    }

    return (
        <button className={type + "-decrement"} onClick = {decrement}>
            <i className="fa-solid fa-arrow-down-long"></i>
        </button>
    )
}

export default Decrement;