import React from 'react';
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { TextField } from "../../components";
import { Creators as TodoListApiActions } from "../../ducks/stores/todoListApi";

const TodoListApi = ({handleSubmit}) => {
    const dispatch = useDispatch();

    const onSubmit = (data) => {
      dispatch(TodoListApiActions.PostTodo(data));
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ margin: "10%" }}>
                <Field component={TextField} name="name" />
                <button type="submit">Click Here</button>

                {/* <div>
                    {selector.map(({ todo }) => (
                    <p key={v4()}>{todo}</p>
                    ))}
                </div> */}
            </div>
      </form>
  )
}


export default reduxForm({
    form: "formTodoListApi",
  })(TodoListApi);
  