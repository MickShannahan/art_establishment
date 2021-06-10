<template>
  <div class="CreateProject row border p-2 mb-3">
    <div class="col-11">
      Create a project
    </div>
    <div class="col-1 text-right btn text-light">
      x
    </div>
    <div class="col-12">
      <form class="row p-3" @submit.prevent="createProject">
        <div class="col-6">
          <input type="text"
                 class="form-control"
                 aria-describedby="helpId"
                 v-model="state.newProject.title"
          >
          <small id="helpId" class="form-text text-muted">Project Title</small>
        </div>
        <div class="col-6">
          <input type="text"
                 class="form-control"
                 aria-describedby="helpId"
                 v-model="state.newProject.imgUrl"
          >
          <small id="helpId" class="form-text text-muted">Image Url</small>
        </div>
        <div class="col-12 mt-1">
          <button class="btn btn-info btn-block">
            create post
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
import { projectService } from '../services/ProjectService'
export default {
  name: 'CreateProject',
  setup() {
    const state = reactive({
      newProject: {}
    })
    return {
      state,
      createProject() {
        try {
          projectService.createProject(state.newProject)
          state.newProject = {}
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
