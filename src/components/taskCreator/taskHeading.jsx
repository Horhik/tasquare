import React from 'react'
import {connect} from 'react-redux';

class TaskHeading extends React.Component {
    render() {
        return(
            <input
                placeholder={"Task"}
                type="text"
                className={'task-creator__heading'}/>
        )
    }
}
export default connect(state => (
    {
        taskCreator: state.taskCreator
    }
),
    {

    })(TaskHeading )