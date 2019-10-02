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
            <ul className="ts--wrapper">
                <li>
                    <SetReminder/>
                </li>
                <li>
                    <SetDate/>
                </li>
                <li>
                    <AddTags/>
                </li>
                <li>
                        <SetPriority priority={IU}/>
                </li>
                <li>
                        <SetPriority priority={IN}/>
                </li>
                <li>
                        <SetPriority priority={NU}/>
                </li>
                <li>
                        <SetPriority priority={NN}/>
                </li>
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