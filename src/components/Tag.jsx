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
      'tagCreator' //it's UPDATE_StATE locate arg
    );
  });

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
      className={`tag tag__on-creating `}
      style={{
        cursor:  'default',
        ...tagStyle
      }}
    >
      { `#${props.tagText}`}
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
