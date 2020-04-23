import { all } from "redux-saga/effects";
import { watchTodoListActions } from "./todoList";
import { watchSessionActions } from "./login";

function* rootSaga() {
  yield all([watchSessionActions(), watchTodoListActions()]);
}

export { rootSaga as default, rootSaga };
