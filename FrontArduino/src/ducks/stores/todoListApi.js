import { createActions, createReducer } from "reduxsauce";
/**
 * @description Action types & creators
 */

export const { Types, Creators } = createActions({
    PostTodo: ["payload"],
    getTodoListById: ['payload']
});

/**
 * @description Handlers
 */
const INITIAL_STATE = {
    payload: [],
};

const PostTodo = (state = INITIAL_STATE, action) => ({
    ...state,
    payload: action.payload,
});

const getTodoListById = (state = INITIAL_STATE, action) => ({
    ...state,
    payload: action.payload,
});
  
const HANDLERS = {
    [Types.POST_TODO]: PostTodo,
    [Types.GET_TODO_LIST_BY_ID]: getTodoListById
};

/**
 * @description Reducer
 */
export default createReducer(INITIAL_STATE, HANDLERS);
