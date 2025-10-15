import CommonService from './common.service';

class MediaService extends CommonService {

  async uploadUserProfilePhoto(parmas: any) {
    return await this.post('/media',parmas)
  }

}

export const mediaService = new MediaService();

