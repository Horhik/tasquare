import React from "react";
import { connect } from "react-redux";
import { updateUserState } from "../../actions/userActions";
import { resetTimer } from "../../svg/timerIcons";

const ResetTimer = props => {
  return (
    <button
      type={"button"}
      className={"timer__button   timer__button--rounded timer__stop"}
      onClick={() =>
        props.resetTimer({
          playStopTimer: false,
          timerDuration: {
            minutes: props.isWorking
              ? props.working.minutes
              : props.relax.minutes,
            seconds: props.isWorking
              ? props.working.seconds
              : props.relax.seconds,
            fullSec: props.isWorking
              ? props.working.fullSec
              : props.relax.fullSec
          }
        })
      }
    >
      {resetTimer}
    </button>
  );
};
export default connect(
  state => ({
    working: state.userData.workingDuration,
    relax: state.userData.relaxDuration,
    isWorking: state.userData.workingTimer
  }),
  {
    resetTimer: updateUserState
  }
)(ResetTimer);
