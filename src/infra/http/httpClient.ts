import axios from 'axios';
import Config from 'react-native-config';
import { HttpResponse, IHttpRequest } from '@model/http/httpClient';
import { SuperConsole } from '@tools/indentedConsole';

const api = axios.create({
  baseURL: Config.API_BASE_URL,
});

export const httpRequest = async (data: IHttpRequest): Promise<HttpResponse | undefined> => {
  try {
    const response: HttpResponse = await api.request({
      url: data.url,
      method: data.method,
      params: data.params,
      data: data.body,
      headers: data.headers,
      timeoutErrorMessage: 'timeout',
      timeout: 15000,
    });

    return {
      data: response.data,
      pagination: {
        last_visible_page: response.pagination?.last_visible_page,
        has_next_page: response.pagination?.has_next_page,
      },
    };
  } catch (error) {
    SuperConsole(error);
  }
};
