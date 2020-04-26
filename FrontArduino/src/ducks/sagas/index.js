import { all } from "redux-saga/effects";
import { watchTodoListApiActions } from "./todoListApi";
import { watchSessionActions } from "./login";

function* rootSaga() {
  yield all([watchSessionActions(), watchTodoListApiActions()]);
}

export { rootSaga as default, rootSaga };
