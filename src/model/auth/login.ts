export interface IAuth {
  userName: string;
  password: string;
}

export interface IAuthResponse {
  status: statusResponse;
  message: string;
}

export interface IRegister {
  userName: string;
  password: string;
  passwordConfirm: string;
}

const enum statusResponse {
  'ok' = 0,
  'userName' = 1,
  'password' = 2,
  'error' = 3,
}
