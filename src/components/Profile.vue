<template>
  <div class="Profile row justify-content-center" v-if="profile.id">
    <div class="col-8 border bg-fade shadow px-3">
      <img class="img-fluid rounded-pill p-4" :src="profile.picture" alt="" srcset="">
      <h4 class="text-center text-primary  my-3">
        {{ profile.name }}
      </h4>
      <p>{{ profile.bio }}</p>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
import { profileService } from '../services/ProfileService'
import { useRoute } from 'vue-router'
export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    const state = reactive({

    })
    onMounted(() => {
      profileService.getProfile(route.params.id)
    })
    return { state, profile: computed(() => AppState.activeProfile) }
  }
}
</script>

<style scoped>

</style>
