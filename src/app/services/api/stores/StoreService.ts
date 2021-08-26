import apiService from '../../Api'

export default class StoreService {
  static getStoreByToken(token: string) {
    return apiService.get(`stores/get/hash/${token}`)
  }
}
