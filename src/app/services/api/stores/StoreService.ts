import apiService from "../../Api"

class StoreService {
    getStoreByToken(token: string) {
        return apiService.get(`stores/get/hash/${token}`)
    }
}

export default new StoreService()