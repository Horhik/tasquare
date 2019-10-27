import React from 'react';

import { connect } from 'react-redux';

import { PlusIcon } from '../../../svg/navBarIcons';

import {
  createNewTag,
  updateState
} from './../../../actions/taskCreatorActions';

import { HuePicker } from 'react-color';
import Tag from '../../Tag';

class CreateNewTag extends React.Component {
  constructor(props) {
    super(props);
    this.setColor = this.setColor.bind(this);
    this.state = {
      tagColor: {
        hsl: {
          h: 30
        }
      }
    };
  }

  setColor(color) {
    this.setState({ tagColor: color });
  }
  createTag() {
    this.props.createNewTag();
  }
  render() {
    const creator = this.props.creator;
    return (
      <div>
        {creator.createNewTag ? (
          <div className="tag-bar--inner tag-bar__tag-creator">
            <Tag color={this.state.tagColor.hsl.h} />
            <HuePicker
              color={this.state.tagColor}
              onChange={e => this.setColor(e)}
              width={'50vw'}
            />
          </div>
        ) : (
          <button
            onClick={this.createTag.bind(this)}
            type="button"
            className="tag-bar__button tag-bar__new-tag-button"
          >
            <PlusIcon color={'#C0C0C0'} />;
          </button>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    creator: state.taskCreator.tagCreator,
    taskText: state.taskCreator.taskText
  }),
  {
    createNewTag,
    updateState
  }
)(CreateNewTag);
