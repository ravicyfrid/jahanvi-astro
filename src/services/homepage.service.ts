import CommonService from './common.service';

class HomePageSerivec extends CommonService {

	async getHomePage() {
		return await this.get('/home')
	}

}

export const homePageSerivec = new HomePageSerivec();

