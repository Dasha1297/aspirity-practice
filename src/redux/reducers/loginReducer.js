import { LOGIN } from "../consts";

const defaultState = {
  isAuth: false,
};
const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
};
export default loginReducer;

export const setAuth = () => ({ type: LOGIN });
