import { IAuth } from '@model/auth/login';

export const mockAuth: IAuth = {
  userName: 'admin',
  password: '123456',
};

export const mockAPIAuth = async (data: IAuth) => {
  const { password, userName } = data;
  if (password.length === 0 || userName.length === 0) {
    return {
      status: 411,
      message: 'Preencha todos os campos',
    };
  }
  if (userName !== mockAuth.userName) {
    return {
      status: 401,
      message: 'Nome de usuário inválido',
    };
  }
  if (password !== mockAuth.password) {
    return {
      status: 401,
      message: 'Senha inválida',
    };
  }
  if (data.userName === mockAuth.userName && data.password === mockAuth.password) {
    return {
      status: 200,
      message: '',
    };
  } else {
    return {
      status: 500,
      message: 'Algo errado aconteceu',
    };
  }
};
