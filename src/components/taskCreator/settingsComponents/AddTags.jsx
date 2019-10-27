import React, { useState } from 'react';
import { tag } from '../../../svg/navBarIcons';
import { showHideTaskBar } from '../../../actions/taskCreatorActions'; //showHideTaskBar
import { connect } from 'react-redux';

function AddTags(props) {
  const [className, modifyClass] = useState('task-setting ');
  function showHideTaskBar() {
    props.showHideTaskBar(true);
    modifyClass(className + ' task-setting--selected');
  }
  return (
    <li key={'task-tag'}>
      <button onClick={showHideTaskBar} type="button" className={className}>
        {tag}
      </button>
    </li>
  );
}
export default connect(
  null,
  {
    showHideTaskBar
  }
)(AddTags);
