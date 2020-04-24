import { takeEvery, put } from "redux-saga/effects";
import {
  Types as LoginTypesTypes,
  Creators as LoginTypesActions,
} from "../stores/login";
import { Creators as ErrorActions} from '../stores/errors';
import axios from "axios";

function* Session(action) {
  const data = action.payload;
  try {
    const response = yield axios.post(`http://localhost:3333/session`, data);
    yield put(LoginTypesActions.Token(response.data.token));
  } catch (error) {
    yield put(ErrorActions.Error( error.response));
  }
}

function* RegisterUser(action) {
  const data = action.payload;
  try {
   yield axios.post(`http://localhost:3333/user/store`, data);
   yield put(ErrorActions.Error({ status: 200, data:[{ message: 'cadastrado com sucesso' }]}));
  } catch (error) {
    yield put(ErrorActions.Error( error.response));
  }
}

function* watchSessionActions() {
  yield takeEvery(LoginTypesTypes.SESSION, Session);
  yield takeEvery(LoginTypesTypes.REGISTER_USER, RegisterUser);

}

export { watchSessionActions as default, watchSessionActions };
