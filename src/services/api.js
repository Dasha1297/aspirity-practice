import axios from "axios";
import { ApiUrl } from "../redux/consts";

const api = axios.create({
  baseURL: ApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
