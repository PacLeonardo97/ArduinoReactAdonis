import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLogin = useSelector((state) => state.session.payload?.token?.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin?.length > 0 && restricted ? (
          <Redirect to="/arduino" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
