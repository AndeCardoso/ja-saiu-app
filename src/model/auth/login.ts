export interface IAuth {
  loginUser: string;
  password: string;
}

export interface IRegister {
  loginUser: string;
  password: string;
  passwordConfirm: string;
}

export interface IAuthResponse {
  status: statusResponse;
  message: string;
}

const enum statusResponse {
  'ok' = 200,
  'unauthorized' = 401,
  'length-required' = 411,
  'server-error' = 500,
}
