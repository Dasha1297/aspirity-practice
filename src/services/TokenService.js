class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem("token"));
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("token"));
    return user?.token;
  }

  updateLocalToken(token, refreshToken) {
    let user = JSON.parse(localStorage.getItem("token"));
    console.log(user);
    user.token = token;
    user.refreshToken = refreshToken;
    console.log(user);
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
