export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';

export const fetchTasks = () => ({ type: FETCH_TASKS });
export const fetchTasksSuccess = tasks => ({ type: FETCH_TASKS_SUCCESS, payload: tasks });
export const addTask = task => ({ type: ADD_TASK, payload: task });
export const addTaskSuccess = task => ({ type: ADD_TASK_SUCCESS, payload: task });
