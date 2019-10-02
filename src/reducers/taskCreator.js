import {priorities as pr} from './../constants/priorities';
import {OPEN_TASK_CREATOR} from "../constants/taskCreatorActions";
const initialState = {
    isOpen: false,
    taskText: '',
    defaultPriority: pr.IU,
    defaultDate: "TODAY",
    setReminder: null,
    send: false,
    dateOfCreate: new Date(),
    showTagBar: false
};
const taskCreator = (state = initialState, action) => {
    switch (action.type) {

        case OPEN_TASK_CREATOR:
            return {...state, isOpen: true}
        default:
            return state
    }
}
export default taskCreator;