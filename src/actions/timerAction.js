import {
  PLAY_STOP_TIMER,
  NEXT_TIMER,
  RESET_TIMER,
  TICK,
  MARK_TIMER,
  CHANGE_DURATION,
  SHOW_CHANGE_DURATION_FIELD,
  HIDE_CHANGE_DURATION_FIELD
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

export const changeDuration = duration => ({
  type: CHANGE_DURATION,
  minutes: duration.minutes,
  seconds: duration.seconds
});
export const showChangeDurationField = () => ({
  type: SHOW_CHANGE_DURATION_FIELD
});
export const hideCHangeDurationField = () => ({
  type: HIDE_CHANGE_DURATION_FIELD
});
