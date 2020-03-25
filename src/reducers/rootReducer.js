import { combineReducers } from "redux";
import taskCreatorReducer from "./taskCreatorReducer";
import userData from "./userDataReducer";
import timerReducer from "./timer-reducer";

const rootReducer = combineReducers({
  userData,
  taskCreator: taskCreatorReducer,
  timer: timerReducer
});
export default rootReducer;
