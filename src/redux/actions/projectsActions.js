import axios from "axios";
import {
  ApiUrl,
  FETCH_PROJECTS_SUCCESS,
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
} from "../consts";

import TokenService from "../../services/TokenService";

export const fetchProjects = () => async (dispatch) => {
  try {
    const token = TokenService.getUser().token;
    const response = axios({
      method: "GET",
      url: ApiUrl + "projects",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(response);
    dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PROJECTS_ERROR, error: error });
    throw error.response.data;
  }
};

export const addProjects = () => async (dispatch) => {
  try {
    const token = TokenService.getUser().token;
    const response = axios({
      method: "POST",
      url: ApiUrl + "projects/create",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(response);
    dispatch({ type: ADD_PROJECT, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_PROJECT_ERROR, error: error });
    throw error.response.data;
  }
};


export const updateProjects = () => async (dispatch) => {
  try {
    const token = TokenService.getUser().token;
    const response = axios({
      method: "PUT",
      url: ApiUrl + "projects",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(response);
    dispatch({ type: UPDATE_PROJECT, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_PROJECT_ERROR, error: error });
    throw error.response.data;
  }
};

export const removeProjects = () => async (dispatch) => {
  try {
    const token = TokenService.getUser().token;
    const response = axios({
      method: "DELETE",
      url: ApiUrl + "projects",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(response);
    dispatch({ type: REMOVE_PROJECT, payload: response.data });
  } catch (error) {
    dispatch({ type: REMOVE_PROJECT_ERROR, error: error });
    throw error.response.data;
  }
};
