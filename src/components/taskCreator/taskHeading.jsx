import React from 'react'
import {connect} from 'react-redux';

class TaskHeading extends React.Component {
    render() {
        return(
            <input type="text"/>
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