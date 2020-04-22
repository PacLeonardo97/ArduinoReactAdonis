import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { rootSaga } from "../sagas";
import rootReducer from "./rootReducer";
const sagaMiddleware = createSagaMiddleware();

const middleware = () => {
  if (process.env.NODE_ENV === "development")
    return composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
  return applyMiddleware(sagaMiddleware);
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, middleware());

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
