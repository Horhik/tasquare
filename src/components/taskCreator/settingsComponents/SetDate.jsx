import React, { useRef } from "react";
import { connect } from "react-redux";
import { calendar } from "../../../svg/navBarIcons";

import { updateState } from "../../../actions/taskCreatorActions";

const SetDate = props => {
  const datePicker = useRef({});
  return (
    <li key={"task-calendar"}>
      <input
        onChange={props.updateState({
          defaultDate: datePicker.current.value
        })}
        ref={datePicker}
        className={"date-picker--outer"}
        type="date"
        name="date of reminder"
        id="task-date"
      />
      <label for={"task-date"} className="task-setting">
        {calendar}
      </label>
    </li>
  );
};
export default connect(null, {
  updateState
})(SetDate);
