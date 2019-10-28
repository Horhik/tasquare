import React ,{useEffect, useState}from 'react';
import { connect } from 'react-redux';
import Tag from '../Tag';

const TaskTags = props => {
    const [tags, getTagFromId] = useState([])
    useEffect(() => {
        const getObj = props.currentTags.map(id => {
            for(let tag of Object.values(props.userTags)){
                if(tag.id ===id){
                    return tag
                }
            }
        })
        getTagFromId(getObj)
    }, [props.currentTags])
return (
    <ul className={'task-tags'}>
      {tags.map(tag => (
        <li className={'task-tags__item'} key={tag.id}>
          <Tag id={tag.id} color={tag.color} text={tag.text}/>
        </li>
      ))}
    </ul>
  );
};
export default connect(
  state => ({
    taskCreator: state.taskCreator,
    currentTags: state.taskCreator.tags,
      userTags:state.userData.tags
  }),
  {}
)(TaskTags);
