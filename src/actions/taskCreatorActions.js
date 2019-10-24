import {
  OPEN_TASK_CREATOR,
  FOCUS_ON_HEADING,
  SET_TASK_PRIORITY,
  ADD_TASK_TAG,
  SEND_TASK,
  UPDATE_STATE,
  CHANGE_SEND_STATE,
  RESET_TASK_CREATOR,
  CREATE_NEW_TAG,
    PRINTING_TAG_TEXT
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
export const addTag = payload => ({
  type: ADD_TASK_TAG,
  payload
});

export const createNewTag = () => ({
  type: CREATE_NEW_TAG
});

export const printTextToTag = (payload) => ({
  type: PRINTING_TAG_TEXT,
  payload
})
//usuall actions
export const sendTask = task => ({
  type: SEND_TASK,
  task
});

export const resetCreator = () => ({
  type: RESET_TASK_CREATOR
});
export const updateState = payload => ({
  type: UPDATE_STATE,
  payload
});
