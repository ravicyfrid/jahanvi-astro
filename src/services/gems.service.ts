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
		async getGemsInquiries() {
		return await this.get('/gems/enquiries')
	}

}

export const gemsService = new GemsService();

