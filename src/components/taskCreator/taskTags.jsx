import React from 'react';
import { connect } from 'react-redux';
import Tag from '../Tag';

const TaskTags = props => {
  return (
    <ul className={'task-tags'}>
      {props.currentTags.map(tag => (
        <li className={'task-tags__item'} key={tag.id}>
          <Tag id={tag.id} color={tag.color} text={tag.text}></Tag>
        </li>
      ))}
    </ul>
  );
};
export default connect(
  state => ({
    taskCreator: state.taskCreator,
    currentTags: state.taskCreator.tags
  }),
  {}
)(TaskTags);
