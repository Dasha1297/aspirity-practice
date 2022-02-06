import axios from "axios";
import { ApiUrl } from "../consts";

const api = axios.create({
  baseURL: ApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
