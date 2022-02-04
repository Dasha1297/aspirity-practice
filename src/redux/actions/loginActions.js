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
    return response.data.success;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(ApiUrl + "auth/login", {
      email,
      password,
    });
    dispatch(setAuth());
    localStorage.setItem("token", response.data.token);
  } catch (error) {}
};
