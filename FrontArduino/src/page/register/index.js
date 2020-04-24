import React from 'react';
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Grid, Typography } from '@material-ui/core';
import { Creators as LoginActions } from "../../ducks/stores/login";
import { TextField, Button } from "../../components";

const Register = ({ handleSubmit }) => {
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(LoginActions.RegisterUser(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justify="center" alignItems="flex-start" style={{ marginTop: '40px' }}>
            <Typography>Registrar</Typography>
            <Grid container item xs={12} md={12} justify="center" alignItems="flex-start">
                <Field component={TextField} name="username" placeholder="Nome" label="Nome"/>
            </Grid>
            <Grid container item xs={12} md={12} justify="center" alignItems="flex-start">
                <Field component={TextField} name="email" placeholder="Email" label="Email"/>
            </Grid>
            <Grid container item xs={12} md={12} justify="center" alignItems="flex-start">
                <Field component={TextField} type="password" name="password" placeholder="Password" label="Password" />
            </Grid>
            <Grid container item xs={12} md={12} justify="center" alignItems="flex-start">
                <Button type="submit" text="Login"></Button>
            </Grid>
            </Grid>
        </form>
    )
}

export default reduxForm({
    form: "formLogin",
  })(Register);
