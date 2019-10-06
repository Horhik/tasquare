import React from 'react'
import {calendar} from "../../../svg/navBarIcons";

const SetDate = (props) =>{
    return(
        <li key={'task-calendar'}>
            <button className="task-setting">
                {calendar}
            </button>
        </li>
    )
};
export default SetDate
