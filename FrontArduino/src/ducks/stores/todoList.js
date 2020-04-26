import { createActions, createReducer } from "reduxsauce";
/**
 * @description Action types & creators
 */
export const { Types, Creators } = createActions({
  getAllTodoList: [],
  CountTodoList: ["payload"],
  PostTodo: ["payload"]
});

/**
 * @description Handlers
 */
const INITIAL_STATE = {
  payload: [],
};

const getAllTodoList = (state = INITIAL_STATE) => ({
  ...state,
});

const CountTodoList = (state = INITIAL_STATE, action) => ({
  ...state,
  payload: [...state.payload, action.payload],
});

const HANDLERS = {
  [Types.GET_ALL_TODO_LIST]: getAllTodoList,
  [Types.COUNT_TODO_LIST]: CountTodoList,
};

/**
 * @description Reducer
 */
export default createReducer(INITIAL_STATE, HANDLERS);
