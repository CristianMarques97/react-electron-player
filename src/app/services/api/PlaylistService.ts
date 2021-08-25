import getVar from "../../constants";
import apiService from "../Api";

class PlaylistService {
    async getCompanyPlaylist() {
        return apiService.get(`${getVar('REACT_APP_ASSETS_URL')}playlist.json`)
    }
}

export default new PlaylistService();