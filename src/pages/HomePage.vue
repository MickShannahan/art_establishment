<template>
  <div class="home container-fluid ">
    <div class="row pt-4 justify-content-center">
      <div class="col-8 mb-3 ">
        <Search />
      </div>
      <div class="col-8 ">
        <Thread />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { projectService } from '../services/ProjectService'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      projectService.getProjects()
    })
  }
}
</script>

<style scoped lang="scss">
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

</style>
