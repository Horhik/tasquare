import { APPEND_NEW_TAG, SEND_TASK } from "../constants/taskCreatorActions";
import { priorities } from "../constants/priorities";
import { CHANGE_SHOW_PRIORITY_FILTER } from "../constants/taskListConstants";
const { IU } = priorities;
const uuid = require("uuid/v4");
const initialState = {
  tags: [],
  tasks: [],
  reminders: [],
  currentTaskFilter: IU
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_NEW_TAG:
      return {
        ...state,
        tags: [action.payload, ...state.tags]
      };
    case SEND_TASK:
      const task = { ...action.task, id: uuid() };
      return {
        ...state,
        tasks: [task, ...state.tasks]
      };
    case CHANGE_SHOW_PRIORITY_FILTER:
      return { ...state, currentTaskFilter: action.priority };
    default:
      return state;
  }
};
export default userData;
