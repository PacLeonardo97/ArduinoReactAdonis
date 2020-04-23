import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { TextField } from "../../components";
import { Creators as LoginActions } from "../../ducks/stores/login";

const Login = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(LoginActions.Session(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field component={TextField} name="email" placeholder="Email" label="Email"/>
      <Field component={TextField} name="password" placeholder="password" label="password" />
      <button type="submit">Fazer Login</button>
    </form>
  );
};

export default reduxForm({
  form: "formLogin",
})(Login);
