import { toast } from 'react-toastify';
import store from 'store'
export default class CommonService {
	baseURL: string;
	accessToken: string | null

	constructor() {
		this.baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';
		this.accessToken = store.get(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || '') || null
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	async request(endpoint: string, method: string, params?: any) {
		const headers = {
			'Content-Type': 'application/json',
			'Authorization': this.accessToken ? this.accessToken : ''
		};

		const config: RequestInit = { method, headers };

		if (method !== 'GET' && params) {
			config.body = params instanceof FormData ? params : JSON.stringify(params);
		}

		const fullURL = `${this.baseURL}${endpoint}`

		try {
			const response = await fetch(fullURL, config);
			const data = await response.json();
			if (data.error === false) {
				toast.success(data.message)
			}
			else if (data.error === true) {
				toast.error(data?.message );
				if (data.message === 'Unauthorized access!') {
					window.location.replace('/login');
				}
			}

			return data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			// this.showErrorToast(error?.message);

			if (error.message === 'Unauthorized access!') {
				window.location.replace('/login');
			}
			return error;
		}
	}


	async get(endpoint: string) {
		return await this.request(endpoint, 'GET');
	}

	async post(endpoint: string, params = {}) {
		return await this.request(endpoint, 'POST', params);
	}

	async put(endpoint: string, params = {}) {
		return await this.request(endpoint, 'PUT', params);
	}

	async delete(endpoint: string) {
		return await this.request(endpoint, 'DELETE');
	}
}