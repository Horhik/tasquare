import { combineReducers } from "redux";
import taskCreatorReducer from "./taskCreatorReducer";
import userData from "./userDataReducer";

const rootReducer = combineReducers({
  userData,
  taskCreator: taskCreatorReducer
});
export default rootReducer;
