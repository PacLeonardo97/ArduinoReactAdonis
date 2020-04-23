import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { TextField } from "../../components";
import { Creators as LoginActions } from "../../ducks/stores/login";

const Login = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const selector = useSelector((value) => value);
  console.log("seletor", selector.session.payload);
  const onSubmit = (data) => {
    dispatch(LoginActions.Session(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field component={TextField} name="email" />
      <Field component={TextField} name="password" />
      <button type="submit">Fazer Login</button>
    </form>
  );
};

export default reduxForm({
  form: "formLogin",
})(Login);
