import React, { useEffect, useState } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import {
  updateState,
  showHideTaskBar,
  addTagById,
  deleteTagById
} from '../actions/taskCreatorActions';
const Tag = props => {
  const [selected, controlSelect] = useState(false);
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
    controlSelect(!selected);
    // console.log(store.getState().userData.tags);
    if (!selected) {
      props.addTagById(props.id, store.getState().userData.tags);
    } else {
      props.deleteTagById(props.id);
    }
  };
  const tagStyle = selected
    ? {
        color: `hsl(${props.color}, 90%, 70%)`,
        backgroundColor: `hsl(${props.color}, 70%, 30%)`,
        borderColor: `hsl(${props.color}, 100%, 50%)`
      }
    : {
        color: `${showLight ? 'white' : 'black'}`,
        backgroundColor: `hsl(${props.color}, 100%, 50%)`,
        borderColor: `hsl(${props.color}, 100%, ${showLight ? '70%' : '35%'})`
      };
  return (
    <mark
      onClick={props.status === 'searched' ? addToTask : null}
      className={`tag tag__on-creating ${selected ? 'tag__selected' : ''}`}
      style={{
        cursor: props.status === 'searched' ? 'pointer' : 'default',
        ...tagStyle
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
    addTagById,
    deleteTagById
  }
)(Tag);
