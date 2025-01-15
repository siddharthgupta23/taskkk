import { takeEvery, put } from 'redux-saga/effects'
import { addTask } from '../slices/taskSlice'

function* handleAddTask(action: ReturnType<typeof addTask>) {
  // Here you can add side effects, like saving to local storage
  yield put(addTask(action.payload))
}

export function* watchTaskActions() {
  yield takeEvery(addTask.type, handleAddTask)
}

