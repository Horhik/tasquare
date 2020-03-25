import {
  CHANGE_SHOW_PRIORITY_FILTER,
  COMPLETE_TASK,
  SWITCH_TAB
} from "../constants/taskListConstants";

export const changeFilterPriority = priority => ({
  type: CHANGE_SHOW_PRIORITY_FILTER,
  priority
});
export const completeTask = payload => ({
  type: COMPLETE_TASK,
  payload
});

export const switchTab = tab => ({
  type: SWITCH_TAB,
  tab
});
