import { SEND_TASK } from '../constants/taskCreatorActions';
import { priorities } from '../constants/priorities';
import { CHANGE_SHOW_PRIORITY_FILTER } from '../constants/taskListConstants';
const { IU } = priorities;
const uuid = require('uuid/v4');
const initialState = {
  tags: [],
  tasks: [],
  reminders: [],
  currentTaskFilter: IU
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TASK:
      console.log(action);
      const task = { ...action.task, id: uuid() };
      return {
        ...state,
        tasks: [task, ...state.tasks],
        tags: [...state.tags, ...action.task.tags]
      };
    case CHANGE_SHOW_PRIORITY_FILTER:
      return { ...state, currentTaskFilter: action.priority };
    default:
      return state;
  }
};
export default userData;
