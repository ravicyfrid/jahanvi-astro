import CommonService from './common.service';

class BioService extends CommonService {
	async getBio() {
		return await this.get('/bio')
	}

}

export const bioService = new BioService();

