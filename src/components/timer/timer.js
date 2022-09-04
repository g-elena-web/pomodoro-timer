import React from "react";
import Reset from "../reset/reset";
import StartStop from "../start-stop";

import "./timer.css";

function Timer(props) {
    const { type, left, state, startStop, reset } = props;
    return (
        <div className={(state === 'on') ? "timer timer-active" : "timer"}>
            <div className="timer-label">{type}</div>
            <div className="time-left">{left}</div>
            <div className="timer-buttons">
                <StartStop state={state} startStop={startStop}  />
                <Reset reset={reset} />
            </div>
        </div>
    );
}

export default Timer;