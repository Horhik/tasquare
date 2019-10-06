import {combineReducers} from "redux";
import taskCreator from "./taskCreator";
import userData from "./userDataReducer";


const rootReducer = combineReducers({
    userData,
    taskCreator,
})
export default rootReducer