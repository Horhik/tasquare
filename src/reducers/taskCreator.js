import {priorities as pr} from './../constants/priorities';
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
    return state
}
export default taskCreator;