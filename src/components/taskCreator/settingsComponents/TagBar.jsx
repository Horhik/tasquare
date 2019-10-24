import React from 'react';
import { connect } from 'react-redux';
import AllUserTags from './AllUserTags';
import CreateNewTag from './CreateNewTag';

class TagBar extends React.Component {
  render() {
    const creator = this.props.creator;
    return (
      <section className={'tag-bar'}>
        <h3 className={'visually-hidden'}>selectTags</h3>
        {creator.createNewTag ? '' : <AllUserTags filter={'tag'} />}
        <CreateNewTag />
      </section>
    );
  }
}
export default connect(
  state => ({
    creator: state.taskCreator.tagCreator
  }),
  {}
)(TagBar);
