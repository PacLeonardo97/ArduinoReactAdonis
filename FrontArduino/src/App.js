import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./ducks";
import { TodoList, Login, Arduino } from "./page";
import { PrivateRoute, PublicRoute } from "./components/Route";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={() => <div>loading</div>} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <PublicRoute
              restricted={true}
              path="/login"
              component={Login}
              exact
            />
            <PrivateRoute path="/todo" component={TodoList} exact />
            <PrivateRoute path="/Arduino" component={Arduino} exact />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
