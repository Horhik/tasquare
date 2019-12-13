import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Stage, Arc, Layer } from "react-konva";
import {
  showTimerProgress,
  updateTime,
  updateUserState,
  switchTimer
} from "../../actions/userActions";

const Timer = props => {
  const mainColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--main-color"
  );
  const secondColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--second-color");
  const maxSize = window.innerWidth > 600 ? 600 : window.innerWidth;
  const size = maxSize - 24;
  const [wrappedInterval, setWrap] = useState(Number);
  useEffect(() => {
    if (props.timerActive && !props.alreadyStart) {
      props.updateUserState({ timerAlreadyStart: true });
      setWrap(
        setInterval(() => {
          if (props.duration.fullSec < 0) {
            props.switchTimer();
          } else {
            props.updateTime(props.duration.fullSec--);
          }
        }, 1000)
      );
    } else if (!props.timerActive) {
      console.log(wrappedInterval);
      clearInterval(wrappedInterval);
      props.updateUserState({ timerAlreadyStart: false });
    }
  }, [props.timerActive]);
  return (
    <div className={"timer--inner"}>
      <Stage width={size} height={size}>
        <Layer>
          <Arc
            x={size / 2}
            y={size / 2}
            stroke={
              props.onWorkingState ? `hsl(${mainColor}, 50%, 50%)` : secondColor
            }
            strokeWidth={12}
            innerRadius={size / 2 - 12}
            outerRadius={size / 2 - 12}
            rotation={-90}
            lineJoin={"round"}
            angle={props.timerProgress}
            shadowEnabled={true}
            shadowOpacity={0.25}
            shadowOffsetY={4}
            shadowBlur={4}
          />
        </Layer>
      </Stage>
      <span className="timer__time">
        {`${
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

export default connect(
  state => ({
    timerActive: state.userData.playStopTimer,
    duration: state.userData.timerDuration,
    timerProgress: state.userData.timerProgress,
    alreadyStart: state.userData.timerAlreadyStart,
    onWorkingState: state.userData.workingTimer
  }),
  {
    showTimerProgress,
    updateTime,
    updateUserState,
    switchTimer
  }
)(Timer);
