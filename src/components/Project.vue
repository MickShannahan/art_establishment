<template>
  <div class="project col-12  shadow mb-4" data-toggle="modal" data-target="#project-modal" @click="setProject">
    <div class="row">
      <div class="col-6 cover-img p-0">
        <img class="img-fluid" :src="projectProp.imgUrl" alt="" srcset="">
      </div>
      <div class="col-6 ">
        <div class="row p-0 pictures">
          <div v-for="img in projectProp.photos" :key="img.imgUrl" class="col-6 secondImg" :style="'background-image: url('+img.imgUrl+')'"></div>
        </div>
        <div class="row justify-content-center align-items-center project-title">
          <h4 class="border py-2 px-3 text-center">
            {{ projectProp.title }}
          </h4>
        </div>
        <div class="row p-0  project-creator align-items-end pb-1">
          <div class="col-10 text-right pr-0">
            {{ projectProp.creator.name }}
          </div>
          <router-link class="col-2 creator-img" :to="{name: 'ProfilePage', params:{id: projectProp.creator.id }}" :key="projectProp.id" @click.stop>
            <img class="img-fluid rounded-pill" :src="projectProp.creator.picture" alt="" srcset="">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
import { projectService } from '../services/ProjectService'
export default {
  props: { projectProp: { type: Object, required: true } },
  name: 'Project',
  setup(props) {
    const state = reactive({

    })
    return {
      state,
      setProject() {
        projectService.setProject(props.projectProp.id)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.project{
  transition: all .1s linear;
  height: 13em;
  overflow: hidden;
}


.project:hover{
  outline: solid 1px var(--light);
transform: scale(1.075);
  box-shadow: 0px 8px 6px 0px rgba(0, 0, 0, 0.4);
}
.pictures{
  height: 100%;
  overflow: hidden;
}

.secondImg{
  min-height: 5em;
  background-size: cover;
}

.cover-img{
  overflow: hidden;
  > img{
    height: auto;
    width: 100%;
  }
}

.project-title{
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  width: 100%;
  height: 13em;
}
.project-creator{
  position: absolute;
  top: 0;
  width: 100%;
  height: 13em;
}
</style>
