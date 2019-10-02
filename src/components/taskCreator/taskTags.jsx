import React from 'react'
import {connect} from 'react-redux';

class TaskTags extends React.Component {
    render() {
        return(
            <ul className={'task-tags'}></ul>
        )
    }
}
export default connect(state => (
        {
            taskCreator: state.taskCreator
        }
    ),
    {

    })(TaskTags )