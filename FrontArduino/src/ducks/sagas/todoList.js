import { takeEvery, put } from "redux-saga/effects";
import {
  Types as TodoListTypes,
  Creators as TodoListActions,
} from "../stores/todoList";

function* watchTodoListActions() {}

export { watchTodoListActions as default, watchTodoListActions };
