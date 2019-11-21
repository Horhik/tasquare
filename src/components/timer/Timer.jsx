import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Stage, Arc, Layer } from "react-konva";
import {showTimerProgress} from "../../actions/userActions";

const Timer = props => {
  const [progress] = useState(360);
  const [alreadyStart, isAlreadyStrart] = useState(false)
  const mainColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--main-color"
  );
  const maxSize = window.innerWidth > 600 ? 600 : window.innerWidth;
  const size = maxSize - 24;
  const timerDuration =props.duration.minutes * 60 + props.duration.seconds;
  const timeInitialState = {
    minutes:  Math.floor(timerDuration/60),
    seconds: timerDuration%60,
    duration:  timerDuration,
    interval: 1,
  }
  const [time, updateTime] = useState(timeInitialState);
  const [timerInterval, specifyInterval] = useState(null)
  useEffect(() => {
    if(props.timerActive ){
      isAlreadyStrart(true);
     specifyInterval ( setInterval(() => {
        updateTime({
          minutes: Math.floor(time.duration/60),
          seconds: time.duration%60,
          duration: time.duration--,
        })
         props.showTimerProgress(time.duration)
          console.log(timerInterval)
      }, 10)
     )
    } else if (!props.timerActive){
      console.log(timerInterval)
      clearInterval(timerInterval)
    }
  }, [ props.timerActive])
    const [progressBar, changeProgressBar] = useState(360)
    useEffect(() => {
        changeProgressBar(360 * props.timerProgress)
    }, [props.timerProgress])
  // setInterval(() => {
  //   updateTime({
  //     minutes: minutes,
  //     seconds: seconds
  //   });
  // }, 1000);
  return (
    <div className={"timer--inner"}>
      <Stage width={size} height={size}>
        <Layer>
          <Arc
            x={size / 2}
            y={size / 2}
            stroke={`hsl(${mainColor}, 50%, 50%)`}
            strokeWidth={12}
            innerRadius={size / 2 - 12}
            outerRadius={size / 2 - 12}
            rotation={-90}
            lineJoin={'round'}
            angle={props.timerProgress}
          />
        </Layer>
      </Stage>
      <span className="timer__time">
        {/*props.timerActive
          ?*/ `${
              time.minutes.toString().length === 1
                ? `0${time.minutes}`
                : time.minutes
            }:${
              time.seconds.toString().length === 1
                ? `0${time.seconds}`
                : time.seconds
            }`/*
          : `${
              props.duration.minutes.toString().length === 1
                ? `0${props.duration.minutes}`
                : props.duration.minutes
            }:${
              props.duration.seconds.toString().length === 1
                ? `0${props.duration.seconds}`
                : props.duration.seconds
            }`*/}
      </span>
    </div>
  );
};

export default connect(state => ({
  timerActive: state.userData.playStopTimer,
  duration: state.userData.timerDuration,
    timerProgress: state.userData.timerProgress
}), {
    showTimerProgress
})(Timer);
