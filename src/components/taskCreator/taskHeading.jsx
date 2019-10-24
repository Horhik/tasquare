import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import {
  sendState,
  updateState,
  focusOnHeading,
    addTag,
    printTextToTag
} from '../../actions/taskCreatorActions';
import { GETTING_READY, READY } from '../../constants/taskCreatorActions';

class TaskHeading extends React.Component {
  constructor(props) {
    super(props);
    this.self = React.createRef();
    this.input = this.input.bind(this)
    this.state = {
      headingText: ''
    };
  }
  focusing() {
    this.self.current.focus();
  }
  componentDidMount() {
    if (this.props.taskCreator.isOpen) {
      this.focusing();
      this.setState({
        headingText: ''
      });
    }
  }
  componentDidUpdate() {
    if (this.props.send === GETTING_READY) {
      // const heading = this.self.current.value;
      // this.props.sendTask({text: heading})
      this.props.updateState({ taskText: this.self.current.value });
      this.props.sendState(READY);
    }
    //focus on Heading if user click at random place
    if (store.getState().taskCreator.focusOnHeading) {
      this.focusing();
    }
  }
  input(e) {
    const input = e.target;
    if (
      input.value[input.value.length - 1] === '#' &&
      input.value[input.value.length - 2] === ' '
    ) {
      console.log("showingTagVar");
      this.props.addTag();
    }
    if(this.props.taskCreator.showTagBar){
        const text = input.value.split('#')[1];
      console.log(text)
      if(this.props.creator.createNewTag){
        this.props.printTextToTag(text)
      }
    }
  }
  submitTag() {
    //  if()
  }
  render() {
    return (
      <input
        onSubmit={this.submitTag}
        ref={this.self}
        placeholder={'Task'}
        type="text"
        onInput={e => this.input(e)}
        className={'task-creator__heading'}
      />
    );
  }
}
export default connect(
  state => ({
    taskCreator: state.taskCreator,
    getText: state.taskCreator.sendTask,
    send: state.taskCreator.sendState,
    creator: state.taskCreator.tagCreator
  }),
  {
    sendState,
    updateState,
    focusOnHeading,
    addTag,
    printTextToTag,

  }
)(TaskHeading);
