import axios from "axios";
import api from "../../services/api";
import TokenService from "../../services/TokenService";
import { ApiUrl, FAIL, SET_USER, SUCCESS } from "../consts";

export const usersById = (id) => async (dispatch) => {
  try {
    const response = axios({
      method: "get",
      url: ApiUrl + `users/${id}`,
      headers: {
        Authorization: "Bearer " + TokenService.getLocalAccessToken(),
      },
    });
    dispatch({ type: SET_USER, payload: (await response).data });
    return SUCCESS;
  } catch (error) {
    return FAIL;
  }
};
