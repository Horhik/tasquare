import { priorities as pr } from './../constants/priorities';
import {
  FOCUS_ON_HEADING,
  OPEN_TASK_CREATOR,
  SET_TASK_PRIORITY,
  UPDATE_STATE,
  CHANGE_SEND_STATE,
  RESET_TASK_CREATOR,
  NOT_READY,
  ADD_TASK_TAG,
  CREATE_NEW_TAG,
  PRINTING_TAG_TEXT,
  APPEND_NEW_TAG
} from '../constants/taskCreatorActions';
const tagCreatorInitialState = {
  createNewTag: false,
  tagSearch: true,
  searchFilter: '',
  newTagColor: 40,
  newTagText: '',
  colorPresets: [40]
};
const initialState = {
  isOpen: false,
  sendState: NOT_READY,
  taskText: '',
  defaultPriority: pr.IU,
  defaultDate: 'TODAY',
  setReminder: null,
  send: false,
  dateOfCreate: new Date(),
  showTagBar: false,
  focusOnHeading: false,
  tagCreator: {
    createNewTag: false,
    tagSearch: true,
    searchFilter: '',
    newTagColor: 40,
    newTagText: '',
    colorPresets: [40]
  },
  tags: [],
  id: ''
};
const taskCreator = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_TASK_CREATOR:
      return { ...state, isOpen: true };
    case FOCUS_ON_HEADING:
      return { ...state, focusOnHeading: true };
    case CHANGE_SEND_STATE:
      return { ...state, sendState: action.payload };
    case ADD_TASK_TAG:
      return { ...state, showTagBar: true };
    case UPDATE_STATE:
      if (action.locate) {
        return {
          ...state,
          [action.locate]: { ...state[action.locate], ...action.payload }
        };
      } else {
        return { ...state, ...action.payload };
      }
    case SET_TASK_PRIORITY:
      return { ...state, defaultPriority: action.payload };
    case RESET_TASK_CREATOR:
      return initialState;
    case CREATE_NEW_TAG:
      return {
        ...state,
        tagCreator: {
          ...state.tagCreator,
          createNewTag: true,
          tagSearch: false
        }
      };
    case PRINTING_TAG_TEXT:
      return {
        ...state,
        tagCreator: {
          ...state.tagCreator,
          newTagText: action.payload
        }
      };
    case APPEND_NEW_TAG:
      console.log(
        state.taskText.substr(
          0,
          state.taskText.length - (state.tagCreator.newTagText.length + 2)
        )
      );
      return {
        ...state,
        tags: [
          ...state.tags,
          {
            key: action.payload,
            id: action.payload,
            text: state.tagCreator.newTagText,
            color: state.tagCreator.newTagColor
          }
        ],
        taskText: state.taskText.substr(
          0,
          state.taskText.length - state.tagCreator.newTagText.length
        ),
        tagCreator: tagCreatorInitialState,
        showTagBar: false
      };
    default:
      return state;
  }
};
export default taskCreator;
