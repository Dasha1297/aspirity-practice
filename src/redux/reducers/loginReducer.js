import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REFRESH_TOKEN,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../consts";

const user = localStorage.getItem("token");

const defaultState = user
  ? { isAuth: true, user }
  : { isAuth: false, user: null };

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isAuth: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: action.data.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};
export default loginReducer;
