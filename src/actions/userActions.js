import {CHANGE_SHOW_PRIORITY_FILTER, COMPLETE_TASK} from "../constants/taskListConstants";

export const changeFilterPriority = (priority) => ({
    type: CHANGE_SHOW_PRIORITY_FILTER,
    priority
})
export const completeTask = (payload)  => ({
    type: COMPLETE_TASK,
    payload
})