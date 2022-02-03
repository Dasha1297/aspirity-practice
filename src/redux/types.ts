export interface User {
  login: string;
  password: string;
}

export interface LoginState {
  accessToken: string;
  refreshToken: string;
  errors: any;
  user: User;
}
