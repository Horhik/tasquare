import React from 'react';
import {connect} from 'react-redux';
import TaskHeading from "./taskHeading";
import TaskSettings from "./taskSettings";
import TaskTags from "./taskTags";
import {send} from "./../../svg/navBarIcons"

class taskCreator extends React.Component{
    render() {
        return (
            <section className={"task-creator"}>
                <div className={"task-creator--inner"}>
                    <TaskHeading/>
                    <TaskSettings/>
                    <TaskTags/>
                </div>
                <button className=" task-creator__send">
                    {send}
                </button>
            </section>
        );
    }
}
export default connect(state => ({
    taskCreator: state.taskCreator
}), {})(taskCreator);