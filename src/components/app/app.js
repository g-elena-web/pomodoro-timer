import React, { useState } from "react";
import TimeLength from "../time-length";

import './app.css';

function App() {

    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timerType, setTimerType] = useState('session');
    const [timerState, setTimerState] = useState('off');
    const [timeLeft, setTimeLeft] = useState("25:00");

    const formatTime = (m, s) => {
        if (m.toString().length < 2) m = '0' + m;
        if (s.toString().length < 2) s = '0' + s;
        return (`${m}:${s}`);
    }

    const playSound = () => {
        document.getElementById("beep").currentTime = 0;
        document.getElementById("beep").play();
    };

    const saveBreakLength = (length) => {
        setBreakLength(length);
    }

    const saveSessionLength = (length) => {
        setSessionLength(length);
        setTimeLeft(formatTime(length, 0));
    }

    return (
        <div className="app">
            <div className="length-tools">
            <TimeLength 
                type="break" 
                length={breakLength}
                onChange={saveBreakLength}
                state={timerState} />
            <TimeLength 
                type="session" 
                length={sessionLength}
                onChange={saveSessionLength}
                state={timerState} />
            </div>
        </div>
    )

}

export default App;