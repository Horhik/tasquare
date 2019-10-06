import React from 'react';
import {connect} from 'react-redux';
import TaskHeading from "./taskHeading";
import TaskSettings from "./taskSettings";
import TaskTags from "./taskTags";
import {send} from "./../../svg/navBarIcons"
import {focusOnHeading, sendState, sendTask, resetCreator} from './../../actions/taskCreatorActions'
import {GETTING_READY, READY} from "../../constants/taskCreatorActions";
import store from "../../store";

class taskCreator extends React.Component{

    sendTask(state){
        this.props.sendState(state)
        //wait then sendState will be equal READY
        setTimeout(() => {
            if (this.props.send === READY){
                this.props.sendTask(this.props.taskCreator)
                this.props.resetCreator()
            }
        }, 0)
    }
    render() {
        return (
            <section className={"task-creator"}>
                <div
                    // onClick={() => this.props.focusOnHeading}
                    className={"task-creator--inner"}>
                    <TaskHeading/>
                    <TaskSettings/>
                    <TaskTags/>
                </div>
                <button
                    onClick={() =>this.sendTask(GETTING_READY) }
                    className=" task-creator__send">
                    {send}
                </button>
            </section>
        );
    }
}
export default connect(state => ({
    taskCreator: state.taskCreator,
    send: state.taskCreator.sendState
}), {
    focusOnHeading,
    sendState,
    sendTask,
    resetCreator
})(taskCreator);