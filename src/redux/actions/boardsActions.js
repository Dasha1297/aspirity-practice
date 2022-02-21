import { ADD_BOARD, DELETE_BOARD, EDIT_BOARD, ApiUrl, BOARDS } from "../consts";
import axios from "axios";
import TokenService from "../../services/TokenService";

export const getBoards = () => {
  return async (dispatch) => {
    try {
      const token = TokenService.getUser().token;
      console.log(token);
      const response = await axios({
        method: "GET",
        url: ApiUrl + "boards",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      dispatch({ type: BOARDS, payload: response.data });
    } catch (error) {
      throw error.response.data;
    }
  };
};

export const addBoard = (
    { 
      name, 
      //projectId 
    }) =>
  async (dispatch) => {
    try {
      const token = TokenService.getUser().token;
      const response = await axios({
        method: "POST",
        url: ApiUrl + "boards/create",
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          name,
          //projectId,
        },
      });
      dispatch({ type: ADD_BOARD, payload: response.data });
    } catch (error) {
      throw error.response.data;
    }
  };

export const updateBoard =
  ( name, projectId, id ) =>
  async (dispatch) => {
    try {
      const token = TokenService.getUser().token;
      const response = await axios({
        method: "PUT",
        url: ApiUrl + `boards/update/${id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          name,
          //projectId,
        },
      });
      dispatch({ type: EDIT_BOARD, payload: { id, data: response.data } });
    } catch (error) {
      throw error.response.data;
    }
  };

export const deleteBoard =
  ({id}) =>
  async (dispatch) => {
    try {
      const token = TokenService.getUser().token;
      const response = await axios({
        method: "DELETE",
        url: ApiUrl + `boards/delete/${id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      dispatch({ type: DELETE_BOARD, payload: id });
    } catch (error) {
      throw error.response.data;
    }
  };
