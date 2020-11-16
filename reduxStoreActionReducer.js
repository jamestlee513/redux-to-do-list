const { createStore } = require('redux');

const CREATE_TASK = 'CREATE_TASK'
const RESET_TASK_LIST = 'RESET_TASK_LIST'
const DELETE_TASK = 'DELETE_TASK'

const createTask = () => {
    return {
        type: CREATE_TASK,
        taskMessage: 'walk dog'
    }
}

const resetTaskList = () => {
    return {
        type: RESET_TASK_LIST,
        emptyTaskList: []
    }
}

const deleteTask = () => {
    return {
        type: DELETE_TASK,
    }
}

const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TASK:
            const newTask = {
                message: action.taskMessage,
            }
            return [...state, newTask]
        case RESET_TASK_LIST:
            return
        case DELETE_TASK:
            return
        default:
            return state;
    }
}

const store = createStore(tasksReducer);