import { createActions, createReducer } from "reduxsauce";
/**
 * @description Action types & creators
 */
export const { Types, Creators } = createActions({
    Error: ['payload'],
    clearState: ['']
});

/**
 * @description Handlers
 */
const INITIAL_STATE = {
  payload: [''],
};

const Error = (state = INITIAL_STATE, action) => ({
  ...state,
  payload: action.payload,
});

const clearState = (state = INITIAL_STATE) => ({
  ...state,
  payload: ['']
});

const HANDLERS = {
  [Types.ERROR]: Error,
  [Types.CLEAR_STATE]: clearState
};

/**
 * @description Reducer
 */
export default createReducer(INITIAL_STATE, HANDLERS);
