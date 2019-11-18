import { priorities as pr } from "./../constants/priorities";
import {
  FOCUS_ON_HEADING,
  OPEN_TASK_CREATOR,
  SET_TASK_PRIORITY,
  UPDATE_STATE,
  CHANGE_SEND_STATE,
  RESET_TASK_CREATOR,
  NOT_READY,
  SHOW_HIDE_TASK_BAR,
  CREATE_NEW_TAG,
  PRINTING_TAG_TEXT,
  APPEND_NEW_TAG,
  CLOSE_TAG_BAR,
  APPEND_EXISTS_TAG,
  DELETE_TAG_FROM_TASK
} from "../constants/taskCreatorActions";
const tagCreatorInitialState = {
  createNewTag: false,
  tagSearch: true,
  searchFilter: "",
  newTagColor: 40,
  newTagText: "",
  colorPresets: [40]
};
const initialState = {
  isOpen: false,
  sendState: NOT_READY,
  taskText: "",
  defaultPriority: pr.IU,
  defaultDate: "TODAY",
  setReminder: null,
  send: false,
  dateOfCreate: new Date(),
  showTagBar: false,
  focusOnHeading: false,
  complete: false,
  tagCreator: {
    createNewTag: false,
    tagSearch: true,
    searchFilter: "",
    newTagColor: 40,
    newTagText: "",
    colorPresets: [40]
  },
  tags: [],
  userTags: [],
  id: ""
};
const taskCreatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_TASK_CREATOR:
      return { ...state, isOpen: true };
    case FOCUS_ON_HEADING:
      return { ...state, focusOnHeading: true };
    case CHANGE_SEND_STATE:
      return { ...state, sendState: action.payload };
    case SHOW_HIDE_TASK_BAR:
      if (!action.payload) {
        return {
          ...state,
          showTagBar: action.payload,
          taskText: state.taskText.substr(
            0,
            state.taskText.length - (state.tagCreator.newTagText.length + 1)
          )
        };
      }
      return { ...state, showTagBar: action.payload };
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
        },
        //payload as button method. Using button for create tag or keyboard
        taskText: state.taskText + (action.payload ? " #" : "")
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
      return {
        ...state,
        tags: [action.payload.id, ...state.tags],
        taskText: state.taskText.substr(
          0,
          state.taskText.length - (state.tagCreator.newTagText.length + 1)
        ),
        tagCreator: tagCreatorInitialState,
        showTagBar: false
      };
    case APPEND_EXISTS_TAG:
      return {
        ...state,
        tags: [action.id, ...state.tags]
      };
    case DELETE_TAG_FROM_TASK:
      return {
        ...state,
        tags: state.tags.filter(tag => tag !== action.id)
      };
    case CLOSE_TAG_BAR:
      return {
        ...state,
        tagCreator: tagCreatorInitialState
      };
    default:
      return state;
  }
};
export default taskCreatorReducer;
