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
    const id = user.userId;
    const newUser = {
      userId: id,
      token: token,
      refreshToken: refreshToken,
    };
    this.removeUser();
    this.setUser(newUser);
    console.log(this.getUser());
  }

  getUser() {
    return JSON.parse(localStorage.getItem("token"));
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
