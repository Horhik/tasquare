import { APPEND_NEW_TAG, SEND_TASK } from "../constants/taskCreatorActions";
import { priorities } from "../constants/priorities";
import {
  CHANGE_SHOW_PRIORITY_FILTER,
  COMPLETE_TASK,
  START_TIMER,
  SWITCH_TAB
} from "../constants/taskListConstants";
import { TASKS, TIMER } from "../constants/tabConstants";
import {showTimerProgress, startTimer} from "../actions/userActions";
import {PLAY_STOP_TIMER, SHOW_TIMER_PROGRES} from "../constants/timerActions";
const { IU } = priorities;
const uuid = require("uuid/v4");
const initialState = {
  tags: [],
  tasks: [],
  completedTasks: [],
  reminders: [],
  currentTaskFilter: IU,
  currentTab: TIMER, //TASKS,
  playStopTimer: false,
  startTimer: new Date(),
  endTimer: new Date(),
  timerProgress: 360,
  timerDuration: {
    minutes: 25,
    seconds:0,
  }
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
    case COMPLETE_TASK:
      let completed = [];
      const tasks = state.tasks.filter(task => {
        completed.push(task);
        return task.id !== action.payload.id;
      });
      setTimeout(() => {}, 500);
      return {
        ...state,
        tasks: tasks,
        completedTasks: [...state.completedTasks, completed]
      };
    case SWITCH_TAB:
      return { ...state, currentTab: action.tab };
    case START_TIMER:
      alert(state.playStopTimer);
      const startTime = Date.parse(new Date());
      const endTime = new Date(
        state.startTimer +
          state.timerDuration.minutes * 60 * 1000 +
          state.timerDuration.seconds * 1000
      );
      return {
        ...state,
        startTimer: startTime,
        endTimer: endTime,
        playStopTimer: !state.playStopTimer
      };
    case PLAY_STOP_TIMER:
      if (state.playStopTimer) {
        return { ...state, playStopTimer: !state.playStopTimer };
      }
      return { ...state, playStopTimer: !state.playStopTimer };
    case SHOW_TIMER_PROGRES:
      const duration = state.timerDuration.minutes * 60 + state.timerDuration.seconds
      return {...state, timerProgress: action.sec / duration * 360}
    default:
      return state;
  }
};
export default userData;
