import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_TASKS, fetchTasksSuccess, ADD_TASK, addTaskSuccess } from '../actions/taskAction';

// Giả lập API lấy danh sách tác vụ
function* fetchTasksSaga() {
  try {
    const response = yield call(fetch, 'https://67217df698bbb4d93ca8885b.mockapi.io/Task');
    const tasks = yield response.json(); // Parse JSON response

    if (response.ok) {
      yield put(fetchTasksSuccess(tasks)); // Dispatch success action with tasks
    } else {
      throw new Error('Failed to fetch tasks');
    }
  } catch (error) {
    console.error('Failed to fetch tasks', error);
    // Optionally, dispatch a failure action here if needed
  }
}

function* addTaskSaga(action) {
  try {
    const response = yield call(fetch,'https://67217df698bbb4d93ca8885b.mockapi.io/Task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: action.payload }),
    });

    const newTask = yield response.json();

    if (response.ok) {
      yield put(addTaskSuccess(newTask));
    } else {
      throw new Error('Failed to add task');
    }
  } catch (error) {
    console.error('Error adding task:', error);
    yield put(addTaskFailure(error.message));
  }
}

export default function* taskSaga() {
  yield takeEvery(FETCH_TASKS, fetchTasksSaga);
  yield takeEvery(ADD_TASK, addTaskSaga);
}
