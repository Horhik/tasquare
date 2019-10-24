import React from 'react';
import { connect } from 'react-redux';
import TaskHeading from './taskHeading';
import TaskSettings from './taskSettings';
import TaskTags from './taskTags';
import { send } from './../../svg/navBarIcons';
import {
  focusOnHeading,
  sendState,
  sendTask,
  resetCreator
} from './../../actions/taskCreatorActions';
import { GETTING_READY, READY } from '../../constants/taskCreatorActions';
import TagBar from "./settingsComponents/TagBar";

class taskCreator extends React.Component {
  sendTask(state) {
    this.props.sendState(state);
    //wait then sendState will be equal READY
    setTimeout(() => {
      if (this.props.send === READY) {
        this.props.sendTask(this.props.taskCreator);
        const json = JSON.stringify(this.props.taskCreator);
        console.log(json);
        fetch('http://127.0.0.1:8081/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: json
        });
        this.props.resetCreator();
      }
    }, 0);
  }
  render() {
    console.log( this.props.taskCreator)
    return (
      <form
        //prevent submit and reload  on click
        onSubmit={e => {
          e.preventDefault();
          this.sendTask(GETTING_READY);
        }}
        className={'task-creator'}
      >
        {this.props.taskCreator.showTagBar ?
            <TagBar/>
            : ''
        }
        <div
          onClick={this.props.focusOnHeading}
          className={'task-creator--inner'}
        >
          <TaskHeading />
          <TaskSettings />
          <TaskTags />
        </div>
        <button type="submit" className=" task-creator__send">
          {send}
        </button>
      </form>
    );
  }
}
export default connect(
  state => ({
    taskCreator: state.taskCreator,
    send: state.taskCreator.sendState
  }),
  {
    focusOnHeading,
    sendState,
    sendTask,
    resetCreator
  }
)(taskCreator);
