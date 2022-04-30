import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Stopwatch.css';
import Timer from '../Timer/Timer';
import Buttons from '../Buttons/Buttons';


function Stopwatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    
    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

return (<>
    <div className="stop-watch">
        <h1> Stopwatch </h1>
        <Timer time={time} /> <Buttons active={isActive}
            isPaused={isPaused}
            handleStart={handleStart}
            handlePauseResume={handlePauseResume}
            handleReset={handleReset} />
    </div>
    <div className="btn-main"> 
    <button className="btn">
    <Link to="/">Clock</Link> 
    </button>
    <button className="btn">
    <Link to="/stopwatch">Stopwatch</Link> 
    </button>
  </div>
</>
    );
}

export default Stopwatch;