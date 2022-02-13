import axios from "axios";
import {
  ApiUrl,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REFRESH_TOKEN,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
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
    return response;
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, error: error });
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
    TokenService.setUser(response.data);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
    alert("Произошла ошибка " + error);
  }
};

export const logout = () => async (dispatch) => {
  const token = TokenService.getUser().token;
  await axios({
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
};

export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  });
};
