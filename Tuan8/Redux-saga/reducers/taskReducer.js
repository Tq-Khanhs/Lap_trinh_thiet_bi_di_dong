import { FETCH_TASKS_SUCCESS, ADD_TASK_SUCCESS } from '../actions/taskAction';

const initialState = {
  tasks: [],
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return { ...state, tasks: action.payload };
    case ADD_TASK_SUCCESS:
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
}
