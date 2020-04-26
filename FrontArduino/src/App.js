import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./ducks";
import { PrivateRoute, PublicRoute } from "./components/Route";
import { Menu, ErrorApi } from './components';
import { TodoList, Login, Arduino, Register, TodoListApi } from "./page";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={() => <div>loading</div>} persistor={persistor}>
        <BrowserRouter>
        <ErrorApi />
          <Menu/>
          <Switch>
            <PublicRoute
              restricted={true}
              path="/login"
              component={Login}
              exact
            />
            <PublicRoute
              restricted={true}
              path="/registrar"
              component={Register}
              exact
            />
            <PrivateRoute path="/todo" component={TodoList} exact />
            <PrivateRoute path="/todoApi" component={TodoListApi} exact />

            <PrivateRoute path="/Arduino" component={Arduino} exact />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
