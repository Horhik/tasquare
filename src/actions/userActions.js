import {
  CHANGE_SHOW_PRIORITY_FILTER,
  COMPLETE_TASK,
  SWITCH_TAB,
  START_TIMER,
  UPDATE_TIME
} from "../constants/taskListConstants";
import {
  NEXT_TIMER,
  PLAY_STOP_TIMER,
  SHOW_TIMER_PROGRES,
  UPDATE_USER_STATE
} from "../constants/timerConstants";

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

export const startTimer = time => ({
  type: START_TIMER,
  time
});

export const playStopTimer = () => ({
  type: PLAY_STOP_TIMER
});
export const showTimerProgress = sec => ({
  type: SHOW_TIMER_PROGRES,
  sec
});

export const updateTime = props => ({
  type: UPDATE_TIME,
  props
});

export const updateUserState = payload => ({
  type: UPDATE_USER_STATE,
  payload
});

export const switchTimer = () => ({
  type: NEXT_TIMER
});
