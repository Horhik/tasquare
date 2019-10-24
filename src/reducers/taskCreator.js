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
  CREATE_NEW_TAG, PRINTING_TAG_TEXT
} from '../constants/taskCreatorActions';
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
    colorPresets: [40],

  },
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
      console.log(typeof action.payload);
      return { ...state, ...action.payload };
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
        ...state, tagCreator: {
          ...state.tagCreator,
          newTagText: action.payload
        }
      }
    default:
      return state;
  }
};
export default taskCreator;
