import React from "react";
import { connect } from "react-redux";
import { nextTimer } from "../../svg/timerIcons";
import { switchTimer } from "../../actions/userActions";

const NextTimer = props => {
  return (
    <button
      type={"button"}
      className={"timer__button  timer__button--rounded timer__next-timer"}
      onClick={() => props.switchTimer()}
    >
      {nextTimer}
    </button>
  );
};

export default connect(
  state => ({
    workingMode: state.userData
  }),
  {
    switchTimer
  }
)(NextTimer);
