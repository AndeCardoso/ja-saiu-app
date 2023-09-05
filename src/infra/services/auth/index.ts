import { AuthenticateRequestDTO } from './dtos/authenticateRequestDTO';
import { AxiosHttpClient } from '@model/http/httpClient';

export default class AuthService {
  public async authenticate({ loginUser, password }: AuthenticateRequestDTO) {
    const httpClient = new AxiosHttpClient();
    const response = await httpClient.request({
      method: 'post',
      url: 'sign-in',
      body: { loginUser, password },
    });
    console.log(response);
    return response;
  }
}
