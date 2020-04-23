import { takeEvery, put } from "redux-saga/effects";
import {
  Types as LoginTypesTypes,
  Creators as LoginTypesActions,
} from "../stores/login";

import axios from "axios";

function* Session(action) {
  const data = action.payload;
  try {
    const response = yield axios.post(`http://localhost:3333/session`, data);
    yield put(LoginTypesActions.Token(response.data.token));
  } catch (error) {
    console.log("eerrorr", error);
  }
}

function* watchSessionActions() {
  yield takeEvery(LoginTypesTypes.SESSION, Session);
}

export { watchSessionActions as default, watchSessionActions };
