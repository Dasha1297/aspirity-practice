import axiosInstance from "./api";
import TokenService from "./TokenService";
import { refreshToken } from "../redux/actions/loginActions";
import axios from "axios";

const setup = (store) => {
  axios.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  const { dispatch } = store;
  axios.interceptors.response.use(
    (res) => {
      return res;
    },

    async (err) => {
      const originalConfig = err.config;
      if (originalConfig.url !== "auth/login" && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const rs = await axiosInstance.post("/auth/refresh", {
              refreshToken: TokenService.getLocalRefreshToken(),
            });
            const { token } = rs.data;
            const { refreshToken } = rs.data;
            dispatch(refreshToken(token));
            TokenService.updateLocalAccessToken(token, refreshToken);
            console.log(TokenService.getLocalAccessToken());
            return axiosInstance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    }
  );
};

export default setup;
