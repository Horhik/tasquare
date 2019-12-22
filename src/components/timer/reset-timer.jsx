import React from "react";
import { connect } from "react-redux";
import { resetTimer } from "../../actions/timerAction";
import { resetTimerButton } from "../../svg/timerIcons";

const ResetTimer = props => {
  return (
    <button
      type={"button"}
      className={"timer__button   timer__button--rounded timer__stop"}
      onClick={() => props.resetTimer(false)}
    >
      {resetTimerButton}
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
    resetTimer: resetTimer
  }
)(ResetTimer);
