import {
  PLAY_STOP_TIMER,
  RESET_TIMER,
  NEXT_TIMER,
  CHANGE_TIMER_DURATION,
  TICK,
  MARK_TIMER
} from "../constants/timerConstants";

const initialState = {
  //Timer state
  play: false,
  stop: true,
  alreadyStart: false,
  //Relax mode
  relaxMinutes: 5,
  relaxSeconds: 0,
  fullRelaxInSeconds: 5 * 60,
  //Working mode
  workingMinutes: 25,
  workingSeconds: 0,
  fullWorkingInSeconds: 25 * 60,
  //CurrentTime
  currentMinutes: 25,
  currentSeconds: 0,
  fullCurrentInSeconds: 25 * 60,
  //progres circle
  defaultAngle: 360,
  currentAngle: 1 * 360, //1 is a presents
  //customs
  showChangeTimerDurationPopUp: false,
  //clear interval
  clearID: 0
};
const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_TIMER:
      return {
        ...state,
        alreadyStart: action.alreadyStart,
        clearID: action.clearNumber
      };
    case PLAY_STOP_TIMER:
      return { ...state, play: !state.play };
    case NEXT_TIMER:
      return {
        ...state,
        relaxMode: !state.relaxMode,
        play: false,
        showReset: false,
        currentAngle: 360
      };
    case RESET_TIMER:
      const fullSeconds = state.relaxMode
        ? state.fullRelaxInSeconds
        : state.fullWorkingInSeconds;
      const seconds = state.relaxMode
        ? state.relaxSeconds
        : state.workingSeconds;
      const minutes = state.relaxMode
        ? state.relaxMinutes
        : state.workingMinutes;
      return {
        ...state,
        stop: action.stop,
        play: action.play === undefined ? true : action.play,
        currentMinutes: minutes,
        currentSeconds: seconds,
        currentAngle: 360,
        fullCurrentInSeconds: fullSeconds
      };
    case CHANGE_TIMER_DURATION:
      return {
        ...state
        // showChangeTimerDurationPopUp:
      };

    case TICK:
      const fullSec = state.relaxMode
        ? state.fullRelaxInSeconds
        : state.fullWorkingInSeconds;
      const currentFullSec = state.fullCurrentInSeconds - 1;
      const currentMinutes = ~~(currentFullSec / 60);
      const currentSeconds = currentFullSec % 60;
      const getFullSecDifference =
        state.defaultAngle * (currentFullSec / fullSec);
      return {
        ...state,
        currentAngle: getFullSecDifference,
        fullCurrentInSeconds: currentFullSec,
        currentMinutes: currentMinutes,
        currentSeconds: currentSeconds
      };
    default:
      return { ...state };
  }
};

export default timerReducer;
