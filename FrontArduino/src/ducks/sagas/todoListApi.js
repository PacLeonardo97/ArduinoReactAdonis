import { takeEvery, put, select } from "redux-saga/effects";
import {
    Types as TodoListApiTypes,
    Creators as TodoListApiActions,
} from "../stores/todoListApi";
import {
  Creators as ErrorActions,
} from "../stores/errors";

import axios from 'axios';

function* PostTodo(action) {
    const data = action.payload;
    const { token } = yield select(state => state.session.payload.token)
    try {
      yield axios.post(`http://localhost:3333/todoList/store`, data, { 
        headers: { Authorization : `Bearer ${token}` }}
      );
    } catch (error) {
      yield put(ErrorActions.Error( error.response));
    }
}

function* watchTodoListApiActions() {
    yield takeEvery(TodoListApiTypes.POST_TODO, PostTodo);
}

export { watchTodoListApiActions as default, watchTodoListApiActions };
