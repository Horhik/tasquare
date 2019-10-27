import {
  OPEN_TASK_CREATOR,
  FOCUS_ON_HEADING,
  SET_TASK_PRIORITY,
  SHOW_HIDE_TASK_BAR,
  SEND_TASK,
  UPDATE_STATE,
  CHANGE_SEND_STATE,
  RESET_TASK_CREATOR,
  CREATE_NEW_TAG,
  PRINTING_TAG_TEXT,
  APPEND_NEW_TAG,
  CLOSE_TAG_BAR
} from './../constants/taskCreatorActions';
export const openTaskCreator = payload => ({
  type: OPEN_TASK_CREATOR,
  payload
});

export const focusOnHeading = () => ({
  type: FOCUS_ON_HEADING
});

export const setPriority = payload => ({
  //here payload usally will be priority
  type: SET_TASK_PRIORITY,
  payload
});

export const sendState = payload => ({
  type: CHANGE_SEND_STATE,
  payload
});
//working with tags
export const showHideTaskBar = payload => ({
  type: SHOW_HIDE_TASK_BAR,
  payload
});

export const createNewTag = payload => ({
  type: CREATE_NEW_TAG,
  payload
});

export const printTextToTag = payload => ({
  type: PRINTING_TAG_TEXT,
  payload
});

export const appendNewTag = payload => ({
  type: APPEND_NEW_TAG,
  payload
});

export const closeTagBar = payload => ({
  type: CLOSE_TAG_BAR
});
//usuall actions
export const sendTask = task => ({
  type: SEND_TASK,
  task
});

export const resetCreator = () => ({
  type: RESET_TASK_CREATOR
});
export const updateState = (payload, locate) => ({
  type: UPDATE_STATE,
  payload,
  locate
});
