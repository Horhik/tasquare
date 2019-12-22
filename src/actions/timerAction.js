import {
  PLAY_STOP_TIMER,
  NEXT_TIMER,
  RESET_TIMER,
  UPDATE_USER_STATE,
  UPDATE_TIME,
  SHOW_TIMER_PROGRES,
  START_TIMER,
  TICK,
  MARK_TIMER
} from "../constants/timerConstants";

export const startTimer = time => ({
  type: RESET_TIMER,
  stop: false
});

export const resetTimer = play => ({
  type: RESET_TIMER,
  stop: true,
  play
});
export const playStopTimer = () => ({
  type: PLAY_STOP_TIMER
});
export const showTimerProgress = sec => ({
  type: TICK,
  sec
});

export const tick = payload => ({
  type: TICK,
  payload
});

export const switchTimer = () => ({
  type: NEXT_TIMER
});
export const setAlreadyStart = (alreadyStart, clearNumber) => ({
  type: MARK_TIMER,
  alreadyStart,
  clearNumber
});
