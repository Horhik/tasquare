import {SEND_TASK} from "../constants/taskCreatorActions";
const initialState = {
    tags: [],
    tasks: [],
    reminders: [],
}

const userData = (state = initialState, action) => {
    switch (action.type) {
        case SEND_TASK:
            return {...state, tasks: [...state.tasks, action.task]}
        default: return state
    }
}
export default userData