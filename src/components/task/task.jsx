import React from 'react';
import { connect } from 'react-redux';
import completeButton from '../../svg/completeButton';
import UserTag from "../taskCreator/settingsComponents/UserTag";
class Task extends React.Component {
  render() {
      console.log(this)
      console.log(this.props)
      const tags  = this.props.tags.map(id => {
          for(let tag of this.props.userTags){
              console.log(tag)
              if (tag.id === id) {
                  return (
                      <li className={'task__tag'} key={tag.id}>
                          <UserTag id={tag.id} color={tag.color} text={tag.text} onList={true}/>
                      </li>
                  )
              }
          }
      })
      console.log(tags)
      return (
          <div className={'task'}>
        <div className="task--inner"><span>
            {this.props.text}
        </span>
            <ul className="task__tags">
                {tags}

            </ul>

        </div>
        <button className="task__complete">{completeButton}</button>
      </div>
    );
  }
}
export default connect(state => ({
    userTags: state.userData.tags
}))(Task);
