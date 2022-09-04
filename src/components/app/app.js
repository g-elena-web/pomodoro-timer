import React, { useState } from "react";
import TimeLength from "../time-length";
import Timer from "../timer/timer";

import timerBeep from "../../resources/timer-beep.wav";

import './app.css';

function App() {

    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timerType, setTimerType] = useState('session');
    const [timerState, setTimerState] = useState('off');
    const [timeLeft, setTimeLeft] = useState("25:00");
    const [timer, setTimer] = useState(function(){});

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

    const startStop = () => {
        if (timerState === 'off') {
            setTimerState('on');
            startLoop(sessionLength, 0);
        } else if (timerState === 'on') {
            setTimerState('paused');
            setTimer(clearInterval(timer));
        } else if (timerState === 'paused') {
            setTimerState('on');
            const mins = timeLeft.split(':')[0];
            const secs = timeLeft.split(':')[1];
            startLoop(mins, secs);
        }
    }

    const startLoop = (m, s) => {
        let type = timerType;
        let start = new Date().getTime() + 1000;
        let finish = start + (m * 60 * 1000) + (s * 1000);

        const startTimer = () => {
            const now = new Date().getTime();
            const distance = finish - now;
            if (distance < 0) {
                type = (type === 'break') ? 'session' : 'break';
                setTimerType(type);
                m = (type === 'break') ? breakLength : sessionLength;
                start = new Date().getTime() + 1000;
                finish = start + (m * 60 * 1000);
            } else {
                const mins = Math.floor(distance / (60 * 1000));
                const secs = Math.floor(distance % (60 * 1000) / 1000);
                if ((mins === 0) && (secs === 0)) playSound();
                setTimeLeft(formatTime(mins, secs));
            }
        }; 

        setTimeLeft(formatTime(m, s));
        setTimer(setInterval(startTimer, 500));
    }

    const reset = () => {
        document.getElementById("beep").pause();
        setTimer(clearInterval(timer));

        setBreakLength(5);
        setSessionLength(25);
        setTimeLeft("25:00");
        setTimerState('off');
        setTimerType('session');
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
            <Timer
                type={timerType}
                state={timerState}
                left={timeLeft}
                startStop={startStop}
                reset={reset} />
            <audio id="beep" preload="auto" src={timerBeep} />
        </div>
    )
}

export default App;