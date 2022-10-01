import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { headers, injectToken } from '../config/http';
import { STATUS_CODE } from '../types/enum/http.enum';

class APIInstance {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: 'https://dummyjson.com',
      headers,
    });

    http.interceptors.request.use(injectToken, error => Promise.reject(error));

    http.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = http;
    return http;
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  patch<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.http.patch<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private handleError(error: AxiosError) {
    if (!error) return;
    const { status } = error as AxiosError & { status: number };
    switch (status) {
      case STATUS_CODE.INTERNAL_SERVER_ERROR: {
        break;
      }
      case STATUS_CODE.FORBIDDEN: {
        break;
      }
      case STATUS_CODE.UNAUTHORIZED: {
        break;
      }
      case STATUS_CODE.TOO_MANY_REQUESTS: {
        break;
      }
    }
    return Promise.reject(error);
  }
}

export const API = new APIInstance();
