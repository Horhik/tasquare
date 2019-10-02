import React from 'react'
import {calendar} from "../../../svg/navBarIcons";

const SetDate = (props) =>{
    return(
        <button className="task-setting">
            {calendar}
        </button>
    )
};
export default SetDate
