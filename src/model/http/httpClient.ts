import axios from 'axios';

export type IHttpMethod = 'post' | 'get' | 'put' | 'patch' | 'delete';

export enum HttpStatusCode {
  ok = 200,
  notModified = 304,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  methodNotAllowed = 405,
  tooManyRequest = 429,
  internalServerError = 500,
  serviceUnavailable = 503,
}

export type IHttpRequest = {
  url: string;
  method: IHttpMethod;
  body?: any;
  params?: any;
  headers?: any;
};

interface CreateHeadersProps {
  token?: string | null;
  headers?: any;
}

export interface IHttpClient<R = any> {
  request: (data: IHttpRequest) => Promise<HttpResponse<R>>;
}

export type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
  pagination?: IPagination;
};

interface IPagination {
  last_visible_page?: number;
  has_next_page?: boolean;
}

export class AxiosHttpClient implements IHttpClient {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = `http://192.168.1.24/api/`;
  }

  async request(data: IHttpRequest): Promise<HttpResponse> {
    try {
      const response = await axios.request({
        baseURL: this.baseUrl,
        url: data.url,
        method: data.method,
        data: data.body,
        params: data.params,
        headers: this.createHeaders({
          // token: await this.getToken(),
          headers: data.headers,
        }),
        timeoutErrorMessage: 'timeout',
        timeout: 90000,
      });

      return {
        statusCode: response.status,
        data: response.data,
      };
    } catch (err: any) {
      return {
        statusCode: err?.response?.status,
        data: err?.response?.data,
      };
    }
  }

  private createHeaders({ token, headers }: CreateHeadersProps) {
    const tokenAuth = token ? { Authorization: `Bearer ${token}` } : null;
    return {
      'Content-Type': 'application/json',
      ...tokenAuth,
      ...(headers && headers),
    };
  }

  private async getToken(): Promise<void> {
    // const realm = await getRealm();
    // const token = realm.objects<any>('Token');
    // if (token.length) {
    //   return token[0];
    // } else {
    //   return null;
    // }
  }

  private async saveToken(value: string): Promise<void> {
    // const realm = await getRealm();
    // const token = realm.objects<any>('Token');
    // realm.write(() => {
    //   token[0] = value;
    // });
  }
}
