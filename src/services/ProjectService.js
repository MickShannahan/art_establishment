import { AppState } from '../AppState'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'

class ProjectService {
  async getProjects(query = {}) {
    const htmlQuery = convertToQuery(query)
    const res = await api.get('api/projects' + htmlQuery)
    console.log(res.data)
    AppState.projects = res.data
  }

  setProject(id) {
    // could be replaced with a get one from api
    const project = AppState.projects.find(p => p.id === id)
    AppState.activeProject = project
  }

  async createProject(newProject) {
    const res = await api.post('api/projects', newProject)
    console.log(res.data)
    AppState.projects = [res.data, ...AppState.projects]
  }

  async addPhoto(photo) {
    const activeProject = AppState.activeProject
    const res = await api.post('api/projects/' + activeProject.id + '/photos', photo)
    console.log(res.data)
  }
}

export const projectService = new ProjectService()
