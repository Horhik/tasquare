import React from 'react'
import {connect} from 'react-redux'

import {setPriority, focusOnHeading} from './../../../actions/taskCreatorActions'
import {priorities} from "../../../constants/priorities";
const {IU, IN, NU, NN} = priorities;

 class SetPriority extends React.Component{
     constructor(props){
         super(props);
         this.radio = React.createRef()
        this.buttonText  = this.buttonText.bind(this)
     }
    buttonText = () => {
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
             <li
             >
                 <input
                     defaultChecked={this.props.checked || false}
                     className={'task-setting__radio visually-hidden'}
                     type="radio"
                     name="priority"
                     id={`${this.props.priority}-priority`}
                     tabIndex={0}
                 />
                 <label
                     onClick={() => {this.props.setPriority(this.props.priority); console.log(this.props.priority)}}
                     htmlFor={`${this.props.priority}-priority`}
                     className={"task-setting task-setting--priority"} >
                 {text}
                     </label>
             </li>

         )
     }

};
export default connect(state => ({
    taskCreator: state.taskCreator
}),{
    setPriority,
    focusOnHeading
})(SetPriority);