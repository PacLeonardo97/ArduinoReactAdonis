import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoList from "./stores/todoList";
import session from "./stores/login";

import { reducer as formReducer } from "redux-form";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["form", "todoList", "_persist", "session"],
};

const todoListConfig = {
  key: "todo",
  storage,
  blacklist: ["_persist"],
};

const SessionConfig = {
  key: "session",
  storage,
  blacklist: ["_persist"],
};

const rootReducer = combineReducers({
  form: formReducer,
  todoList: persistReducer(todoListConfig, todoList),
  session: persistReducer(SessionConfig, session),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer as default, persistedReducer };
