import React from 'react'
import {connect} from 'react-redux'

import {priorities} from "../../../constants/priorities";
const {IU, IN, NU, NN} = priorities;

 class SetPriority extends React.Component{
     constructor(props){
         super(props);
        this.buttonText  = this.buttonText.bind(this)
     }
    buttonText = () => {
         console.log(this.props.priority)
        switch (this.props.priority) {
            case IU:
                return "iU";
            case IN:
                return "iN";
            case NU:
                return "nU";
            case NN:
                return "nN";
            default:
                return "iU";
        }
    }

     render() {
         const text = this.buttonText();
         return(
             <button className={"task-setting task-setting--priority"} >
                 {text}
             </button>
         )
     }

};
export default connect(state => ({
    taskCreator: state.taskCreator
}))(SetPriority);