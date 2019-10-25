import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateState } from '../actions/taskCreatorActions';
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
  return (
    <mark
      className={'tag tag__on-creating'}
      style={{
        color: `${showLight ? 'white' : 'black'}`,
        backgroundColor: `hsl(${props.color}, 100%, 50%)`,
        borderColor: `hsl(${props.color}, 100%, ${showLight ? '70%' : '35%'})`
      }}
    >{`#${props.creator}`}</mark>
  );
};
export default connect(
  state => ({
    creator: state.taskCreator.tagCreator.newTagText
  }),
  {
    updateState
  }
)(Tag);
