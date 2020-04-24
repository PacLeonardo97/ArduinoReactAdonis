import { createActions, createReducer } from "reduxsauce";
/**
 * @description Action types & creators
 */
export const { Types, Creators } = createActions({
  RegisterUser: ['payload'],
  Session: ["payload"],
  Token: ["payload"],
});

/**
 * @description Handlers
 */
const INITIAL_STATE = {
  payload: [],
};

const RegisterUser = (state = INITIAL_STATE, action) => ({
  ...state,
  payload: action.payload,
});

const Session = (state = INITIAL_STATE, action) => ({});

const Token = (state = INITIAL_STATE, action) => ({
  ...state,
  payload: action.payload,
});

const HANDLERS = {
  [Types.REGISTER_USER]: RegisterUser,
  [Types.SESSION]: Session,
  [Types.TOKEN]: Token,
};

/**
 * @description Reducer
 */
export default createReducer(INITIAL_STATE, HANDLERS);
