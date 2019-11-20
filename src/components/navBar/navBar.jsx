import React from "react";
import Pomodoro from "./pomodoro";
import { connect } from "react-redux";
import AddTaskButton from "./addTaskButton";
import MainSearch from "./search";
import { TIMER } from "../../constants/tabConstants";
import TaskTab from "./taskTab";
import TimerControl from "./timerControl";

class NavBar extends React.Component {
  render() {
    return (
      <section className={"nav-bar"}>
        {this.props.currentTab === TIMER ? <TaskTab /> : <Pomodoro />}
        {this.props.currentTab === TIMER ? <TimerControl /> : <AddTaskButton />}
        <MainSearch />
      </section>
    );
  }
}
export default connect(state => ({
  currentTab: state.userData.currentTab
}))(NavBar);
