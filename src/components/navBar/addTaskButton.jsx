import React from 'react'
import {connect} from 'react-redux'

import {addTaskBtn }from './../../svg/navBarIcons.js'
import {openTaskCreator} from "../../actions/taskCreatorActions";

class AddTaskButton extends React.Component{
    render() {
        return(
            <button
                onClick={this.props.openTaskCreator}
                className={'nav-bar__item add-task-btn'}>
                {addTaskBtn}
            </button>
        )
    }
}
export default connect((state)=> ({
    isOpen: state.taskCreator.isOpen,
}), {
    openTaskCreator
})(AddTaskButton)