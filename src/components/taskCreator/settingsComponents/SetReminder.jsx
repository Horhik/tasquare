import React, { useRef } from "react";
import { connect } from "react-redux";
import { reminder } from "../../../svg/navBarIcons";

import { updateState } from "../../../actions/taskCreatorActions";

const SetDate = props => {
  const time = useRef({});
  return (
    <li key={"task-reminder"}>
      <input
        type="time"
        onChange={props.updateState({ setReminder: time.current.value })}
        ref={time}
        className={"date-picker--outer"}
        name="task-time"
        id="task-time"
      />
      <label className="task-setting" for={"task-time"}>
        {reminder}
      </label>
    </li>
  );
};
export default connect(null, {
  updateState
})(SetDate);
