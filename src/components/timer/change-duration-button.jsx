import React from "react";
import { connect } from "react-redux";
import { showChangeDurationField } from "../../actions/timerAction";
import { changeDurationIcon } from "../../svg/timerIcons";
import ChangeDurationPopUp from "./setup-duration";
const ChangeDurationButton = props => {
  return (
    <div>
      <button
        onClick={props.showChangeDurationField()}
        className={"timer__button   timer__button--rounded timer__stop"}
      >
        {changeDurationIcon}
      </button>
      {props.showPopUp ? <ChangeDurationPopUp /> : ""}
    </div>
  );
};
export default connect(
  state => ({
    showPopUp: state.timer.showChangeDurationPopUp
  }),
  {
    showChangeDurationField
  }
)(ChangeDurationButton);
