import CommonService from './common.service';

class ChatsService extends CommonService {

	async getChatConvertations(id: any) {
		return await this.get(`/chats/${id}/messages`)
	}

	async startChat(id: any,params:{ [key: string]: string }) {
		return await this.post(`/chats/${id}/messages`,params)
	}

}

export const chatsService = new ChatsService();
