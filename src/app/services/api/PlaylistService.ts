import getVar from '../../constants'
import apiService from '../Api'

export default class PlaylistService {
  static async getCompanyPlaylist() {
    return apiService.get(`${getVar('REACT_APP_ASSETS_URL')}playlist.json`)
  }
}
