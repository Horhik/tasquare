import React, {useState} from 'react';
import { tag } from '../../../svg/navBarIcons';
import {addTag} from "../../../actions/taskCreatorActions";
import {connect} from 'react-redux';

function  AddTags (props ) {
    // let className = 'task-setting ';
    const [className, modifyClass] = useState('task-setting ')
    function  addTag(){
       props.addTag()
        // className += ' task-setting--selected'
        modifyClass(className + ' task-setting--selected')
    }
  return (
    <li key={'task-tag'}>
      <button
          onClick={addTag}
          type="button" className={className}>
        {tag}
      </button>
    </li>
  );
};
export default connect(null, {
    addTag
})(AddTags);
