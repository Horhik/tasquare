import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import {
  sendState,
  updateState,
  focusOnHeading,
  showHideTaskBar,
  printTextToTag,
  closeTagBar
} from '../../actions/taskCreatorActions';
import { GETTING_READY, READY } from '../../constants/taskCreatorActions';

class TaskHeading extends React.Component {
  constructor(props) {
    super(props);
    this.self = React.createRef();
    this.input = this.input.bind(this);
    this.state = {
      headingText: '',
      tagText: ''
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
    if (this.props.taskCreator.showTagBar && !this.props.creator.createNewTag) {
      const text = this.self.current.value;
      // if (text.length === 0 || text[text.length - 1] !== '#') {
      //   this.self.current.value += ' #';
      // }
    }
  }
  input(e) {
    this.props.updateState({ taskText: e.target.value });
    const input = e.target;
    if (
      input.value[input.value.length - 1] === '#' &&
      input.value[input.value.length - 2] === ' '
    ) {
      this.props.showHideTaskBar(true);
    }
    if (this.props.taskCreator.showTagBar) {
      const textExists = / #/i.test(input.value);
      const hashArray = input.value.split(' #');
      const text = hashArray[hashArray.length - 1];
      if (!textExists) {
        this.props.showHideTaskBar(false);
        this.props.closeTagBar();
      }
      this.props.printTextToTag(text);
    }
  }
  submitTag() {}
  render() {
    return (
      <input
        ref={this.self}
        placeholder={'Task'}
        type="text"
        value={this.props.taskCreator.taskText}
        onChange={e => this.input(e)}
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
    showHideTaskBar,
    printTextToTag,
    closeTagBar
  }
)(TaskHeading);
