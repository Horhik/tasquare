import React from "react";
import { pomodoroIcon } from "../../svg/navBarIcons";
import { connect } from "react-redux";
import { switchTab } from "../../actions/userActions";
import { TIMER } from "../../constants/tabConstants";

const Pomodoro = props => {
  return (
    <a
      href={"#timer"}
      onClick={() => props.switchTab(TIMER)}
      className={"nav__timer"}
    >
      {pomodoroIcon}
    </a>
  );
};
export default connect(null, {
  switchTab
})(Pomodoro);
