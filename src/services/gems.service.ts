import { generateQueryParams2 } from '@/utils/custom-hooks';
import CommonService from './common.service';

class GemsService extends CommonService {

	async getGemsCategories(params:any) {
		return await this.get(`/gem-categories?${generateQueryParams2(params)}`)
	}
	
	async getGems(params:any) {
		return await this.get(`/gems?${generateQueryParams2(params)}`)
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

	async inquiriesMessages(id:any,params:any , toastify = false) {
		return await this.post(`/gems/enquiries/${id}/comments`,params, toastify)
	}


	
}

export const gemsService = new GemsService();

