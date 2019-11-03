import React from 'react'
import {connect} from 'react-redux'
import Task from "./task";

class TaskList extends React.Component{
    render() {
        const filteredTasks = this.props.tasks.filter(task => task.defaultPriority === this.props.filter)
        return (
            <ul className={'task--wrapper'}>
                {filteredTasks.map(task => <li key={task.id}>
                    <Task text={task.taskText} tags={task.tags} id={task.id}/>
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