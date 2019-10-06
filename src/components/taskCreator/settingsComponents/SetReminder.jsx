import React from 'react'
import {reminder} from "../../../svg/navBarIcons";

const SetDate = (props) =>{
    return(
        <li
        key={'task-reminder'}
        >
            <button className="task-setting">
                {reminder}
            </button>
        </li>
    )
};
export default SetDate