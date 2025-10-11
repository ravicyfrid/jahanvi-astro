import CommonService from './common.service';

class EnquirieService extends CommonService {
	async getEnquires() {
		return await this.get(`gems/enquiries`)
	}

	async gemsEnquiries(params: any) {
		return await this.post('/gems/enquiries', params)
	}

}

export const enquirieService = new EnquirieService();

