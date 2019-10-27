import React, { useEffect } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import {
  updateState,
  showHideTaskBar,
  addTagById
} from '../actions/taskCreatorActions';
const Tag = props => {
  const showLight = props.color > 170 && props.color < 296;
  useEffect(() => {
    props.updateState(
      {
        newTagColor: props.color
      },
      'tagCreator'
    );
  });
  const addToTask = () => {
    console.log(props.id);
    // console.log(store.getState().userData.tags);
    props.addTagById(props.id, store.getState().userData.tags);
  };
  return (
    <mark
      onClick={props.status === 'searched' ? addToTask : null}
      className={'tag tag__on-creating'}
      style={{
        cursor: props.status === 'searched' ? 'pointer' : 'default',
        color: `${showLight ? 'white' : 'black'}`,
        backgroundColor: `hsl(${props.color}, 100%, 50%)`,
        borderColor: `hsl(${props.color}, 100%, ${showLight ? '70%' : '35%'})`
      }}
    >
      {props.id ? props.text : `#${props.tagText}`}
    </mark>
  );
};
export default connect(
  state => ({
    tagText: state.taskCreator.tagCreator.newTagText
  }),
  {
    updateState,
    showHideTaskBar,
    addTagById
  }
)(Tag);
