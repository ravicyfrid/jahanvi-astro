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

	async getGemsInquiriesDetails(id:any) {
		return await this.get(`/gems/enquiries/${id}`)
	}

	async gemsInquiriesMessages(id:any,params:any) {
		return await this.post(`/gems/enquiries/${id}/comments`,params)
	}


	
}

export const gemsService = new GemsService();

