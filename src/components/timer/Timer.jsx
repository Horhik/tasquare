import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Konva from "konva";
import { Stage, Arc, Layer } from "react-konva";

const Timer = props => {
  const [progress, timeFlow] = useState(360);
  const mainColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--main-color"
  );
  const maxSize = window.innerWidth > 600 ? 600 : window.innerWidth;
  const size = maxSize - 24;
  const [time, updateTime] = useState({
    minutes: 25,
    seconds: 0,
    duration:  props.duration.minutes * 60 + props.duration.seconds,
  });
  useEffect(() => {
    if(props.timerActive){
      setInterval(() => {
        updateTime({
          minutes: Math.floor(time.duration/60),
          seconds: time.duration%60,
          duration: time.duration--,
        })
      }, 1000)
    }
  }, [!props.timerActive])
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
            angle={progress}
          />
        </Layer>
      </Stage>
      <span className="timer__time">
        {props.timerActive
          ? `${
              time.minutes.toString().length === 1
                ? `0${time.minutes}`
                : time.minutes
            }:${
              time.seconds.toString().length === 1
                ? `0${time.seconds}`
                : time.seconds
            }`
          : `${
              props.duration.minutes.toString().length === 1
                ? `0${props.duration.minutes}`
                : props.duration.minutes
            }:${
              props.duration.seconds.toString().length === 1
                ? `0${props.duration.seconds}`
                : props.duration.seconds
            }`}
      </span>
    </div>
  );
};

export default connect(state => ({
  timerActive: state.userData.playStopTimer,
  duration: state.userData.timerDuration
}))(Timer);
