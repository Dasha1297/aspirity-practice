import axios from "axios";
import {
  ApiUrl,
  FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REFRESH_TOKEN,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SUCCESS,
} from "../consts";
import api from "../../services/api";
import TokenService from "../../services/TokenService";

export const registration = (email, password, name) => async (dispatch) => {
  try {
    const response = await api.post("auth/signup", {
      email: email,
      password: password,
      name: name,
    });
    dispatch({ type: REGISTER_SUCCESS });
    return SUCCESS;
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, error: error.response.data.error });
    return FAIL;
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await api.post("auth/login", {
      email,
      password,
    });
    const token = {
      token: response.data.token,
      refreshToken: response.data.refreshToken,
    };
    dispatch({ type: LOGIN_SUCCESS, data: response.data });
    TokenService.setUser(token);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
    alert("Произошла ошибка " + error);
  }
};

export const logout = () => async (dispatch) => {
  const token = TokenService.getUser().token;
  try {
    axios({
      method: "POST",
      url: ApiUrl + "auth/logout",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    TokenService.removeUser();
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    return error;
  }
};

export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  });
};
