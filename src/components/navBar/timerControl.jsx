import React, { useState } from "react";

import { connect } from "react-redux";
import { startTimer, playStopTimer } from "../../actions/timerAction";
import { TimerPlaySVG, TimerStopSVG } from "../../svg/timerPlaySVG";
const TimerControl = props => {
  const [onTimeFlow, changeControlState] = useState(false);
  return (
    <button
      onClick={() => {
        props.playStopTimer();
        if (props.stop) {
          props.startTimer();
        }
        changeControlState(!onTimeFlow);
      }}
      className={"nav-bar__item add-task-btn timer__tab"}
    >
      {!props.timerActive ? <TimerPlaySVG /> : <TimerStopSVG />}
    </button>
  );
};
export default connect(
  state => ({
    timerActive: state.timer.play,
    stop: state.timer.stop
  }),
  {
    startTimer,
    playStopTimer
  }
)(TimerControl);
