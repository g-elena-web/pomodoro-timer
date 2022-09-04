import React from "react";

import "./reset.css";

function Reset(props) {

    const { reset } = props;

    return (
        <button className="reset" onClick={reset}>
            <i className="fa-solid fa-arrows-rotate"></i>
        </button>
    );
}

export default Reset;