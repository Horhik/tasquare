import React from 'react'
import {tag} from "../../../svg/navBarIcons";

const AddTags = (props) =>{
    return(
        <li key={"task-tag"}>
            <button className="task-setting">
                {tag}
            </button>
        </li>
    )
};
export default AddTags