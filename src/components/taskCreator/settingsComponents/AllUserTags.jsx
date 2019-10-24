import React from 'react';
import { connect } from 'react-redux';
import Tag from '../../Tag';

class AllUserTags extends React.Component {
  render() {
    const tags = this.props.userTags;
    return (
      <div className="tag-bar--inner tag-bar__user-tags">
        {tags.length !== 0 ? (
          <ul className="tag-bar__list">
            {tags.map(tag => (
              <li key={tag.id} className={'tag-bar__li'}>
                <Tag id={tag.id} color={tag.color}>
                  {tag.text}
                </Tag>
              </li>
            ))}
          </ul>
        ) : (
          <span className={'tag-bar__text'}>no tags</span>
        )}
      </div>
    );
  }
}
export default connect(state => ({
  userTags: state.userData.tags,
  creator: state.taskCreator.tagCreator
}))(AllUserTags);
