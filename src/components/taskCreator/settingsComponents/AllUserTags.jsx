import React from 'react';
import { connect } from 'react-redux';
import Tag from '../../Tag';
import UserTag from "./UserTag";

class AllUserTags extends React.Component {
  render() {
    const tags = this.props.userTags;
    // const filtered = tags.filter(
    //   tag => tag.text.includes(this.props.creator.newTagText) //&& !tag.selected
    // );
    return (
      <div className="tag-bar--inner tag-bar__user-tags">
        {tags.length !== 0 ? (
          <ul className="tag-bar__list">
            {tags.map(tag => (
              <li key={tag.id} className={'tag-bar__li'}>
                <UserTag
                  id={tag.id}
                  color={tag.color}
                  text={tag.text}
                isSelected={this.props.taskCreator.tags.includes(tag.id)}
                />
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
  creator: state.taskCreator.tagCreator,
  taskCreator: state.taskCreator
}))(AllUserTags);
