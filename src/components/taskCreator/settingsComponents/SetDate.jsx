import React, {useState, useEffect, useRef} from 'react'
import {calendar} from "../../../svg/navBarIcons";

const SetDate = (props) =>{
    const [showCalendar, setCalendar] = useState(false)
    const datePicker = useRef(null)
    const showHideCalendar = () => {
        setCalendar(!showCalendar);
        datePicker.current.click();
    }
    return(
        <li key={'task-calendar'}>
            <input  
            ref={datePicker}
            className={"date-picker--outer"}
            type="date" name="date of reminder" id="task-date"/>
            <button 
            onClick={showHideCalendar}
            type={"button"}
            className="task-setting">
                {calendar}
            </button>
        </li>
    )
};
export default SetDate
