import axios from "axios";
import { ApiUrl } from "../consts";
import { setAuth } from "../reducers/loginReducer";

export const registration = async (email, password, name) => {
  try {
    const response = await axios.post(ApiUrl + "auth/signup", {
      email: email,
      password: password,
      name: name,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(ApiUrl + "auth/login", {
        email,
        password,
      });
      dispatch(setAuth());
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};
