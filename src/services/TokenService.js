class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem("token"));
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("token"));
    return user?.token;
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("token"));
    user.token = token;
    localStorage.setItem("token", JSON.stringify(user));
  }

  getUser() {
    return localStorage.getItem("token");
  }

  getUserId() {
    const user = JSON.parse(localStorage.getItem("token"));
    return user.userId;
  }

  setUser(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  removeUser() {
    localStorage.removeItem("token");
  }
}

export default new TokenService();
