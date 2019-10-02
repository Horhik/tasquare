import React from 'react'
import {addTaskBtn }from './../../svg/navBarIcons.js'
class AddTaskButton extends React.Component{
    render() {
        return(
            <button className={'nav-bar__item add-task-btn'}>

                {addTaskBtn}


            </button>
        )
    }
}
export default AddTaskButton