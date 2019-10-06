import React from 'react'
import {connect} from 'react-redux'
import completeButton from "../../svg/completeButton";
class Task extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <div className={"task"}>
                <span className="task--inner">{this.props.text}</span>
                <button className="task__complete">
                    {completeButton}
                </button>
            </div>
        )
    }
}
export default connect()(Task)