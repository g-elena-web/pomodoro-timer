import React from "react";

import "./start-stop.css";

function StartStop(props) {

    const { startStop, state } = props;
    
    return (
        <button className="start-stop" onClick={startStop}>
            {(state === 'on') ? 
                <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
        </button>
    )
}

export default StartStop;