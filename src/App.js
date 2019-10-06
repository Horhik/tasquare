import React from 'react';
import {connect} from 'react-redux';

import DayDate from "./components/header/date";
import NavBar from "./components/navBar/navBar";
import TaskCreator from "./components/taskCreator/taskCreator"
import TaskList from "./components/task/taskList";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <DayDate/>
                <TaskList filter={this.props.showFilter}/>
                {this.props.showNavBar
                    ? <NavBar/>
                    : <TaskCreator/>
                }
            </div>
        );
    }
}

export default connect((state) =>({
  showNavBar: !state.taskCreator.isOpen,
  showFilter: state.userData.currentTaskFilter
}))(App);
