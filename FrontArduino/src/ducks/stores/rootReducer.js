import { combineReducers } from "redux";
import todoList from "./todoList";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  form: formReducer,
  todoList,
});

export default rootReducer;
