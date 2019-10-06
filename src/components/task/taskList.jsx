import React from 'react'
import {connect} from 'react-redux'

class TaskList extends React.Component{
    render() {
        const filteredTasks = this.props.tasks.filter(task => task.defaultPriority === this.props.filter)
        return (
            <ul>
                {filteredTasks.map(task => <li key={task.id}>
                    <span className="task__">
                        {task.taskText}
                    </span>
                </li> )}
            </ul>
        );
    }
}
export default connect(state => ({
   tasks: state.userData.tasks
}),
    {

    })(TaskList)