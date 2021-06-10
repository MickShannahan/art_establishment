<template>
  <div class="ProjectModal" v-if="project.id">
    <!-- Modal -->
    <div class="modal fade"
         id="project-modal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-header border-0">
            <h5 class="modal-title">
              {{ project.title }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="text-light" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="row modal-body justify-content-center align-items-center">
            <div v-for="img in allImages" :key="img.imgUrl" class="col-4  p-1">
              <img class="img-fluid img-zoom shadow" :src="img.imgUrl" alt="">
            </div>
          </div>
          <div class="border-0 row align-items-center">
            <div class="col-1" data-dismiss="modal">
              <router-link class="col-2" :to="{name: 'ProfilePage', params:{id: project.creator.id }}">
                <img class="img-fluid rounded-pill" :src="project.creator.picture" alt="" srcset="">
              </router-link>
            </div>
            <h5 class="col-5">
              {{ project.creator.name }}
            </h5>
            <div class="col-6 text-right" v-if="project.creator.id == account.id">
              <input v-model="state.newPhoto.title" class="rounded w-75 bg-transparent border text-light mx-1" type="text" placeholder="new photo title">
              <input v-model="state.newPhoto.imgUrl" class="rounded w-75 bg-transparent border text-light mx-1" type="text" placeholder="new photo url">
              <button type="button" title="add picture to project" class="btn btn-outline-info h-100" @click="addPhoto">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
import { projectService } from '../services/ProjectService'
import Notification from '../utils/Notification'
export default {
  name: 'ProjectModal',
  setup() {
    const state = reactive({
      newPhoto: {}
    })
    return {
      state,
      account: computed(() => AppState.account),
      project: computed(() => AppState.activeProject),
      allImages: computed(() => {
        if (AppState.activeProject.id) {
          return [AppState.activeProject, ...AppState.activeProject.photos]
        }
        return []
      }),
      addPhoto() {
        try {
          projectService.addPhoto(state.newPhoto)
          state.newPhoto = {}
        } catch (error) {
          Notification.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang='scss'>

.modal-backdrop.show{
  opacity: 1!important;
  background:  var(--fade);
  backdrop-filter: blur(30px)  brightness(.5) contrast(.85);
}

.modal-body{
  height: 80vh;
  overflow-y: auto;
}

</style>
