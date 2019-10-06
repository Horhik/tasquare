import {CHANGE_SHOW_PRIORITY_FILTER} from "../constants/taskListConstants";

export const changeFilterPriority = (priority) => ({
    type: CHANGE_SHOW_PRIORITY_FILTER,
    priority
})