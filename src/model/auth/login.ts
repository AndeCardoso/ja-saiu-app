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
  'ok' = 200,
  'unauthorized' = 401,
  'length-required' = 411,
  'server-error' = 500,
}
