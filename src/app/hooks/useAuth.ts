import { IAuth, IAuthResponse } from '@model/auth/login';
import { mockAuth } from 'app/mocks/auth';

export const useAuth = () => {
  const handleLogin = async (data: IAuth): Promise<IAuthResponse> => {
    if (data.userName !== mockAuth.userName) {
      return {
        status: 1,
        message: 'Nome de usuário inválido',
      };
    }
    if (data.password !== mockAuth.password) {
      return {
        status: 2,
        message: 'Senha inválida',
      };
    }
    if (data.userName === mockAuth.userName && data.password === mockAuth.password) {
      return {
        status: 0,
        message: '',
      };
    } else {
      return {
        status: 3,
        message: 'Algo errado aconteceu',
      };
    }
  };

  return { handleLogin };
};
