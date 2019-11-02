import React, { useState } from 'react';
import store from "../../../store";
import { tag } from '../../../svg/navBarIcons';
import {
  showHideTaskBar,
  updateState
} from '../../../actions/taskCreatorActions'; //showHideTaskBar
import { connect } from 'react-redux';

function AddTags(props) {
  const [className, modifyClass] = useState('task-setting ');
  const [barState, setBar] = useState(true)
  function showHideTaskBar() {
    setBar(!barState)
    props.showHideTaskBar(barState);
    if(barState){

      props.updateState({ taskText: props.taskText + ' #' });
      modifyClass(className + ' task-setting--selected');
    } else{
      const creator = store.getState().taskCreator

      props.updateState({ taskText: creator.taskText.substr(
            0,
            (creator.taskText.length - (creator.tagCreator.newTagText.length + 2))
        ), });
      props.updateState({newTagText: ""}, 'tagCreator')
      modifyClass(className + ' task-setting--selected');
    }
  }
  return (
    <li key={'task-tag'}>
      <button onClick={showHideTaskBar} type="button" className={className}>
        {tag}
      </button>
    </li
    >
  );
}
export default connect(
  state => ({
    taskText: state.taskCreator.taskText
  }),
  {
    showHideTaskBar,
    updateState
  }
)(AddTags);
