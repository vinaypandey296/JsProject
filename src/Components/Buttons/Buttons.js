import React from "react";
import "./Buttons.css";
  
export default function Buttons(props) {
  const StartButton = (
    <div className="butn btn-one btn-start"
         onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="butn btn-two" 
           onClick={props.handleReset}>
        Reset
      </div>
      <div className="butn btn-one" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  
  return (
    <div className="Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}