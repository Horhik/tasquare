import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Stage, Arc, Layer } from "react-konva";
import { tick, switchTimer, setAlreadyStart } from "../../actions/timerAction";

const Timer = props => {
  const mainColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--main-color"
  );
  const secondColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--second-color");
  const maxSize = window.innerWidth > 600 ? 600 : window.innerWidth;
  const size = maxSize - 24;
  useEffect(() => {
    console.log(props.alreadyStart);
    if (props.timerActive && !props.alreadyStart) {
      const id = setInterval(() => {
        props.tick();
      }, 1000);
      props.setAlreadyStart(true, id);
    }
    if (!props.timerActive) {
      console.log(props.clearID);
      clearInterval(props.clearID);
      props.setAlreadyStart(false, -1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    timerActive: state.timer.play,
    alreadyStart: state.timer.alreadyStart,
    clearID: state.timer.clearID,
    duration: {
      minutes: state.timer.currentMinutes,
      seconds: state.timer.currentSeconds,
      fullSec: state.timer.fullCurrentInSeconds
    },
    timerProgress: state.timer.currentAngle,
    stop: state.timer.stop,
    onWorkingState: !state.timer.relaxMode
  }),
  {
    tick,
    switchTimer,
    setAlreadyStart
  }
)(Timer);
