import React from 'react'
import {reminder} from "../../../svg/navBarIcons";

const SetDate = (props) =>{
    return(
        <button className="task-setting">
            {reminder}
        </button>
    )
};
export default SetDate