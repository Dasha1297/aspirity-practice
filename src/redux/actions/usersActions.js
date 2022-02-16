import axios from "axios";
import { ApiUrl, FAIL, SUCCESS } from "../consts";

export const usersById = (id) => {
  try {
    const response = axios({
      method: "get",
      url: ApiUrl + `users/${id}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return SUCCESS;
  } catch (error) {
    return FAIL;
  }
};
