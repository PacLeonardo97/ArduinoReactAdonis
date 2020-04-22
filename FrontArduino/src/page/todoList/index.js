import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { TextField } from "../../components";
import { Creators as TodoListActions } from "../../ducks/stores/todoList";
import { v4 } from "uuid";

const TodoList = ({ handleSubmit }) => {
  const selector = useSelector((store) => store.todoList.payload);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(TodoListActions.CountTodoList(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ margin: "10%" }}>
        <Field component={TextField} name="todo" />
        <button type="submit">Click Here</button>

        <div>
          {selector.map(({ todo }) => (
            <p key={v4()}>{todo}</p>
          ))}
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "formTodoList",
})(TodoList);
