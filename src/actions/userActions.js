import {
  CHANGE_SHOW_PRIORITY_FILTER,
  COMPLETE_TASK,
  SWITCH_TAB,
  START_TIMER
} from "../constants/taskListConstants";
import {PLAY_STOP_TIMER, SHOW_TIMER_PROGRES} from "../constants/timerActions";

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
export const showTimerProgress = (sec) => ({
  type: SHOW_TIMER_PROGRES,
  sec
})