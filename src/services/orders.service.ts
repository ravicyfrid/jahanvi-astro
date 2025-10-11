import { generateQueryParams } from '@/utils/custom-hooks';
import CommonService from './common.service';

class OrdersService extends CommonService {

	async getConsultationFees() {
		return await this.get(`/consultation-fees`)
	}

	async CreateOrder(params: { [key: string]: string }) {
		return await this.post(`/orders`, params)
	}

	async Cashfree(id: string) {
		return await this.post(`/api/cashfree/create-orders/${id}`)
	}

	async MarkPaid(params: { [key: string]: string }) {
		return await this.post(`/orders/markpaid`, params)
	}

	async GetOrders(params: any) {
		return await this.get(`/orders/?${generateQueryParams(params)}`)
	}


}

export const ordersService = new OrdersService();

