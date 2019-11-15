import React from 'react';
import { connect } from 'react-redux';
import AllUserTags from './AllUserTags';
import CreateNewTag from './CreateNewTag';
import { focusOnHeading } from '../../../actions/taskCreatorActions';

class TagBar extends React.Component {
  render() {
    const creator = this.props.creator;
    return (
      <section
        onClick={() => this.props.focusOnHeading()}
        className={'tag-bar'}
      >
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
  {
    focusOnHeading
  }
)(TagBar);
