import { RegisterRequestDTO } from './dtos/registerRequestDTO';
import { AxiosHttpClient } from '@model/http/httpClient';

export default class UserService {
  public async register({ login, password }: RegisterRequestDTO) {
    const httpClient = new AxiosHttpClient();
    return await httpClient.request({
      method: 'post',
      url: 'user',
      body: { login, password },
    });
  }

  public async edit({ login, password }: RegisterRequestDTO) {
    const httpClient = new AxiosHttpClient();
    return await httpClient.request({
      method: 'put',
      url: 'user',
      body: { login, password },
    });
  }
}
