import { generateQueryParams } from '@/utils/custom-hooks';
import CommonService from './common.service';

class KundliService extends CommonService {

	async getKundlies(params:any) {
		return await this.get(`/kundlis/?${generateQueryParams(params)}`)
	}

		async creatKundli(params: { [key: string]: string }) {
		return await this.post(`/kundlis`,params)
	}
	


}

export const kundliService = new KundliService();

