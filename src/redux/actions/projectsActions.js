import axios from "axios";
import {
  ApiUrl,
  FETCH_PROJECTS_SUCCESS,
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
} from "../consts";

import TokenService from "../../services/TokenService";

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const token = TokenService.getUser().token;
      const response = await axios({
        method: "GET",
        url: ApiUrl + "projects",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: response.data });
    } catch (error) {
      throw error;
    }
  };
};

export const addProject =
  ({ name, description }) =>
  async (dispatch) => {
    try {
      const token = TokenService.getUser().token;
      const response = await axios({
        method: "POST",
        url: ApiUrl + "projects/create",
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          name,
          description,
        },
      });
      dispatch({ type: ADD_PROJECT, payload: response.data });
    } catch (error) {
      throw error;
    }
  };

export const updateProjects =
  (id, { name, description }) =>
  async (dispatch) => {
    try {
      const token = TokenService.getUser().token;
      const response = await axios({
        method: "PUT",
        url: ApiUrl + "projects/update/" + id,
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          name,
          description,
        },
      });
      dispatch({ type: UPDATE_PROJECT, payload: { id, data: response.data } });
    } catch (error) {
      throw error;
    }
  };

export const removeProject = (id) => async (dispatch) => {
  try {
    const token = TokenService.getUser().token;
    const response = await axios({
      method: "DELETE",
      url: ApiUrl + "projects/delete/" + id,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    dispatch({ type: REMOVE_PROJECT, payload: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
