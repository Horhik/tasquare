import React from 'react'
import {connect} from 'react-redux';
import store from "../../store";
import {sendState, updateState} from "../../actions/taskCreatorActions";
import {GETTING_READY, READY} from "../../constants/taskCreatorActions";

class TaskHeading extends React.Component {
    constructor(props){
        super(props)
        this.self = React.createRef()
        this.state = {
            headingText : ''
        }
    }
    focusing(){
        this.self.current.focus()
    }
    componentDidMount() {
        if(this.props.taskCreator.isOpen){
            this.focusing()
            this.setState ({
                headingText : ''
            })
        }
    }
    componentDidUpdate() {
        if(this.props.send === GETTING_READY){
            // const heading = this.self.current.value;
            // this.props.sendTask({text: heading})
            this.props.updateState({taskText: this.self.current.value})
            this.props.sendState(READY)
        }
        //focus on Heading if user click at random place
           if(store.getState().taskCreator.focusOnHeading) {
                this.focusing()
           }
    }
    input(e){
         this.setState({headingText: e.target.value})
        //heading state move to parent
        this.props.text(this.state.headingText)
    }
    render() {
        return(
            <input
                ref={this.self}
                placeholder={"Task"}
                // onChange={(e) => this.input(e)}
                type="text"
                className={'task-creator__heading'}/>
        )
    }
}
export default connect(state => (
    {
        taskCreator: state.taskCreator,
        getText: state.taskCreator.sendTask,
        send: state.taskCreator.sendState
    }
),
    {
        sendState,
        updateState

    })(TaskHeading )