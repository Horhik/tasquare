import {
    OPEN_TASK_CREATOR,
    FOCUS_ON_HEADING,
    SET_TASK_PRIORITY,
    SEND_TASK,
    UPDATE_STATE, CHANGE_SEND_STATE, RESET_TASK_CREATOR
} from './../constants/taskCreatorActions'
export const openTaskCreator = (payload) => (
 {
        type: OPEN_TASK_CREATOR,
        payload
    }
);

export const focusOnHeading = () => ({
    type: FOCUS_ON_HEADING,
});

export const setPriority = (payload) => ({
    //here payload usally will be priority
    type: SET_TASK_PRIORITY,
    payload
});

export const sendState = (payload) => ({
    type: CHANGE_SEND_STATE,
    payload
});
export const sendTask = (task) => ({
    type: SEND_TASK,
    task
});
export const resetCreator = () => ({
    type: RESET_TASK_CREATOR,
})
export const updateState = (payload) => ({
    type: UPDATE_STATE,
    payload
})