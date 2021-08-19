import apiService from "../Api";

class PlaylistService {
    async getCompanyPlaylist() {
        return apiService.get('playlist.json')
    }
}

export default new PlaylistService();