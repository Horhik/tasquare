import React from 'react'
import {connect} from 'react-redux';
import {priorities} from "../../constants/priorities";
import SetPriority from './settingsComponents/SetPriority'
import SetReminder from './settingsComponents/SetReminder'
import SetDate from './settingsComponents/SetDate'
import AddTags from './settingsComponents/AddTags'
const {IU, IN, NU, NN} = priorities;


class TaskSettings extends React.Component {
    render() {
        return(
            <ul className="task-settings">
                    <SetReminder/>
                    <SetDate/>
                    <AddTags/>
                    <SetPriority checked={true} priority={IU}/>
                    <SetPriority priority={IN}/>
                    <SetPriority priority={NU}/>
                    <SetPriority priority={NN}/>
            </ul>
        )
    }
}
export default connect(state => (
        {
            taskCreator: state.taskCreator
        }
    ),
    {

    })(TaskSettings )