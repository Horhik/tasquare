import React from "react";
import { connect } from "react-redux";
import createTaskButton from "../../svg/createTaskButton";
import UserTag from "../taskCreator/settingsComponents/UserTag";
import { completeTask } from "../../actions/userActions";

class Task extends React.Component {
  render() {
    let tags;
    // eslint-disable-next-line array-callback-return
    tags = this.props.tags.map(id => {
      for (let tag of this.props.userTags) {
        if (tag.id === id) {
          return (
            <li className={"task__tag"} key={tag.id}>
              <UserTag
                id={tag.id}
                color={tag.color}
                text={tag.text}
                onList={true}
              />
            </li>
          );
        }
      }
    });
    return (
      <div className={"task"}>
        <div className="task--inner">
          <span>{this.props.text}</span>
          <ul className="task__tags">{tags}</ul>
        </div>
        <button
          onClick={() => {
            setTimeout(() => {
              this.props.completeTask({ id: this.props.id });
            }, 500);
          }}
          //TODO add transition effect
          className="task__complete"
        >
          {createTaskButton}
        </button>
      </div>
    );
  }
}
export default connect(
  state => ({
    userTags: state.userData.tags
  }),
  {
    completeTask
  }
)(Task);
