<template>
  <div class="row">
    <Project v-for="project in projects" :key="project.id" :project-prop="project" />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
export default {
  name: 'Thread',
  setup() {
    const state = reactive({

    })
    return { state, projects: computed(() => AppState.projects) }
  }
}
</script>

<style scoped>

</style>
