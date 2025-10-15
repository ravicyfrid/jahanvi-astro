import { toast } from 'react-toastify';
import store from 'store';

export default class CommonService {
  baseURL: string;
  accessToken: string | null;

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';
    this.accessToken =
      store.get(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || '') || null;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async request(
    endpoint: string,
    method: string,
    params?: any,
    toastify: boolean = true
  ) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: this.accessToken ? this.accessToken : '',
    };

    const config: RequestInit = { method, headers };

    if (method !== 'GET' && params) {
      config.body = params instanceof FormData ? params : JSON.stringify(params);
      // If sending FormData, let browser set Content-Type
      if (params instanceof FormData) {
        // remove Content-Type header so browser sets correct boundary
        // (optional depending on your backend)
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete (config.headers as any)['Content-Type'];
      }
    }

    const fullURL = `${this.baseURL}${endpoint}`;

    try {
      const response = await fetch(fullURL, config);
      const data = await response.json();

      // show toasts only if toastify is true
      if (toastify) {
        if (data && data.error === false) {
          if (data.message) toast.success(data.message);
        } else if (data && data.error === true) {
          if (data.message) toast.error(data.message);
          if (data.message === 'Unauthorized access!') {
            window.location.replace('/');
          }
        }
      } else {
        // even when not showing toasts, still handle unauthorized redirection
        if (data && data.error === true && data.message === 'Unauthorized access!') {
          window.location.replace('/');
        }
      }

      return data;
    } catch (error: any) {
      // If toastify is true you could show a generic error toast, but we respect the flag
      if (error?.message === 'Unauthorized access!') {
        window.location.replace('/');
      }
      return error;
    }
  }

  async get(endpoint: string, toastify: boolean = true) {
    return await this.request(endpoint, 'GET', undefined, toastify);
  }

  async post(endpoint: string, params: any = {}, toastify: boolean = true) {
    return await this.request(endpoint, 'POST', params, toastify);
  }

  async put(endpoint: string, params: any = {}, toastify: boolean = true) {
    return await this.request(endpoint, 'PUT', params, toastify);
  }

  async delete(endpoint: string, toastify: boolean = true) {
    return await this.request(endpoint, 'DELETE', undefined, toastify);
  }
}
