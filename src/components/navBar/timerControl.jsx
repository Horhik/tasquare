import React, { useState } from "react";

import { connect } from "react-redux";
import { startTimer, playStopTimer } from "../../actions/userActions";
import { TimerPlaySVG, TimerStopSVG } from "../../svg/timerPlaySVG";
const TimerControl = props => {
  const [onTimeFlow, changeControlState] = useState(false);
  return (
    <button
      onClick={() => {
        changeControlState(!onTimeFlow);
        props.playStopTimer();
      }}
      className={"nav-bar__item add-task-btn"}
    >
      {!props.timerActive ? <TimerPlaySVG /> : <TimerStopSVG />}
    </button>
  );
};
export default connect(
  state => ({
    timerActive: state.userData.playStopTimer
  }),
  {
    startTimer,
    playStopTimer
  }
)(TimerControl);
