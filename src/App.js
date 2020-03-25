import React from "react";
import { connect } from "react-redux";

import DayDate from "./components/header/date";
import NavBar from "./components/navBar/navBar";
import TaskCreator from "./components/taskCreator/taskCreator";
import TaskList from "./components/task/taskList";
import { SEARCH, TASKS, TIMER } from "./constants/tabConstants";
import Timer from "./components/timer/timerTab";
import Search from "./components/Search/Search";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.currentTab === TASKS ? <DayDate /> : ""}
        {this.props.currentTab === TASKS ? (
          <TaskList filter={this.props.showFilter} />
        ) : this.props.currentTab === TIMER ? (
          <Timer />
        ) : this.props.currentTab === SEARCH ? (
          <Search />
        ) : (
          <TaskList />
        )}
        {this.props.showNavBar ? <NavBar /> : <TaskCreator />}
      </div>
    );
  }
}

export default connect(state => ({
  showNavBar: !state.taskCreator.isOpen,
  showFilter: state.userData.currentTaskFilter,
  currentTab: state.userData.currentTab
}))(App);
