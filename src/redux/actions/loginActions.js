import axios from "axios";
import {
  ApiUrl,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../consts";
import api from "../services/api";

export const registration = (email, password, name) => async (dispatch) => {
  try {
    const response = await api.post("auth/signup", {
      email: email,
      password: password,
      name: name,
    });
    dispatch({ type: REGISTER_SUCCESS });
    return response.data.success;
  } catch (error) {
    dispatch({ type: REGISTER_FAIL });
    throw error.response.data;
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await api.post("auth/login", {
      email,
      password,
    });
    dispatch({ type: LOGIN_SUCCESS, data: response.data });
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  const response = api.post(ApiUrl + "auth/logout");
  dispatch({
    type: LOGOUT,
  });
  return response.data.success;
};
