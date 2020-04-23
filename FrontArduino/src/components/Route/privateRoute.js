import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = useSelector((state) => state.session.payload);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin.length > 0 ? <Component {...props} /> : <Redirect to="/Login" />
      }
    />
  );
};

export default PrivateRoute;
