import React from "react";
import { connect } from "react-redux";
import Timer from "./Timer";
import ResetTimer from "./reset-timer";
import NextTimer from "./next-timer";
import ChangeDurationButton from "./change-duration-button";
const TimerTab = props => {
  return (
    <section>
      <h1 className="visually-hidden">Timer</h1>
      <div className="timer--wrapper">
        <Timer />
        <div>
          {props.stop ? <ResetTimer /> : <ChangeDurationButton />}
          <NextTimer />
        </div>
      </div>
    </section>
  );
};
export default connect()(TimerTab);
