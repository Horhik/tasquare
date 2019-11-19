import React from 'react'
import {connect} from 'react-redux'
import Timer from "./Timer";

const TimerTab = (props) => {
    return (
        <section>
            <h1 className="visually-hidden">Timer</h1>
            <div className="timer--wrapper">
                <Timer/>
            </div>
        </section>
    )
}
export default connect()(TimerTab)