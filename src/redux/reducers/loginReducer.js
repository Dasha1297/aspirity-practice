import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REFRESH_TOKEN,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../consts";

const defaultState = {
  isAuth: false,
  userId: null,
  error: null,
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: false,
        error: "",
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isAuth: false,
        error: action.error,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userId: action.data.userId,
        error: "",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        userId: null,
        error: "error",
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        userId: action.userId,
      };
    default:
      return state;
  }
};
export default loginReducer;
