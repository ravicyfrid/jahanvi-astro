import CommonService from './common.service';

class GemsService extends CommonService {

	async getGemsCategories() {
		return await this.get('/gem-categories')
	}
	
	async getGems() {
		return await this.get('/gems')
	}

	async getGemsDetails(id: any) {
		return await this.get(`/gems/${id}`)
	}


}

export const gemsService = new GemsService();

