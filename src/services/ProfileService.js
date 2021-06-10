import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProfileService {
  async getProfile(id) {
    const res = await api.get('api/profiles/' + id)
    console.log(res.data)
    AppState.activeProfile = res.Data
  }
}

export const profileService = new ProfileService()
