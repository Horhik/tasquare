import { APPEND_NEW_TAG, SEND_TASK } from "../constants/taskCreatorActions";
import { priorities } from "../constants/priorities";
import {
  CHANGE_SHOW_PRIORITY_FILTER,
  COMPLETE_TASK,
  START_TIMER,
  SWITCH_TAB,
  UPDATE_TIME
} from "../constants/taskListConstants";
import { TIMER } from "../constants/tabConstants";
import {} from "../actions/userActions";
import {
  NEXT_TIMER,
  PLAY_STOP_TIMER,
  UPDATE_USER_STATE
} from "../constants/timerConstants";
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
  timerAlreadyStart: false,
  timerProgress: 360,
  workingTimer: true, //true is 25:00 minutes -> working mode //false is 5:00 -> relax mode
  changeDuration: false,
  workingDuration: {
    minutes: 25,
    seconds: 0,
    fullSec: 25 * 60
  },
  relaxDuration: {
    minutes: 5,
    seconds: 0,
    fullSec: 5 * 60
  },
  initialDuration: {
    minutes: 25,
    seconds: 0,
    fullSec: 25 * 60
  },
  timerDuration: {
    minutes: 25,
    seconds: 0,
    fullSec: 25 * 60
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
    // case SHOW_TIMER_PROGRES:
    // const duration = state.timerDuration.minutes * 60 + state.timerDuration.seconds
    // return {...state, timerProgress: action.sec / duration * 360}
    case UPDATE_TIME:
      const duration =
        state.initialDuration.minutes * 60 + state.initialDuration.seconds;
      const time = {
        minutes: Math.floor(action.props / 60),
        seconds: action.props % 60,
        fullSec: action.props
      };
      return {
        ...state,
        timerDuration: time,
        timerProgress: (time.fullSec / duration) * 360
      };
    case NEXT_TIMER:
      const newDuration = {
        minutes: !state.workingTimer
          ? state.relaxDuration.minutes
          : state.workingDuration.minutes,
        seconds: !state.workingTimer
          ? state.relaxDuration.seconds
          : state.workingDuration.seconds,
        fullSec: !state.workingTimer
          ? state.relaxDuration.fullSec
          : state.workingDuration.fullSec
      };
      return {
        ...state,
        workingTimer: !state.workingTimer,
        timerProgress: 360,
        timerDuration: newDuration,
        initialDuration: newDuration
      };
    case UPDATE_USER_STATE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
export default userData;
