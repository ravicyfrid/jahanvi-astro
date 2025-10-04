import CommonService from './common.service';

class BioService extends CommonService {
	async getBio() {
		return await this.get(`bio`)
	}
	async createEnquiry(params: { [key: string]: string }) {
		return await this.post('register', params);
	}
}

export const bioService = new BioService();

