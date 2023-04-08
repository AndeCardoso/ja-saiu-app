export type IHttpMethod = 'post' | 'get' | 'put' | 'patch' | 'delete';

export enum HttpStatusCode {
  ok = 200,
  notModified = 304,
  badRequest = 400,
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

export interface IHttpClient<R = any> {
  request: (data: IHttpRequest) => Promise<HttpResponse<R>>;
}

export type HttpResponse<T = any> = {
  data: T;
  pagination?: IPagination;
};

interface IPagination {
  last_visible_page?: number;
  has_next_page?: boolean;
}
