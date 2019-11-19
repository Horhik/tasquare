import React from "react";
import { connect } from "react-redux";
import { switchTab } from "../../actions/userActions";
import { TASKS } from "../../constants/tabConstants";
import { tick } from "../../svg/navBarIcons";

const TaskTab = props => {
  return (
    <a onClick={() => props.switchTab(TASKS)} className={"nav__timer"}>
      {tick}
    </a>
  );
};
export default connect(
  null,
  {
    switchTab
  }
)(TaskTab);
