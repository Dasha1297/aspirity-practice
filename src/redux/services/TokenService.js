class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem("token"));
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("token"));
    return user?.accessToken;
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("token"));
    user.token = token;
    localStorage.setItem("token", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("token"));
  }

  setUser(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  removeUser() {
    localStorage.removeItem("token");
  }
}

export default new TokenService();
