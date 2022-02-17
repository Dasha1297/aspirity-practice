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
  console.log('from fetchPr')
  return async (dispatch) => {
  console.log('from async')
  try {
    const token = TokenService.getUser();
    const response = await axios({
      method: "GET",
      url: ApiUrl + "projects",
      headers: {
      Authorization: "Bearer " + token,
      },
    });
    dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error)
    //dispatch({ type: FETCH_PROJECTS_ERROR, error: error });
    //throw error.response.data;
  }
}
};

export const addProject = ({name, description}) => async (dispatch) => {
  try {
    const token = TokenService.getUser();
    const response = await axios({
      method: "POST",
      url: ApiUrl + "projects/create",
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        name,
        description,
      }
    });
    console.log(response.data)
    dispatch({ type: ADD_PROJECT, payload: response.data });
  } catch (error) {
    console.log(error)
    //dispatch({ type: ADD_PROJECT_ERROR, error: error });
    //throw error.response.data;
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
    dispatch({ type: UPDATE_PROJECT, payload: response.data });
  } catch (error) {
    //dispatch({ type: UPDATE_PROJECT_ERROR, error: error });
    //throw error.response.data;
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
    dispatch({ type: REMOVE_PROJECT, payload: response.data });
  } catch (error) {
    //dispatch({ type: REMOVE_PROJECT_ERROR, error: error });
    //throw error.response.data;
  }
};
