<template>
  <div class="ProfilePage row pt-4 pl-5">
    <div class="col-8">
      <CreateProject v-if="$route.params.id == account.id" />
      <Thread />
    </div>
    <div class="col-4">
      <Profile />
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'ProfilePage',
  setup() {
    const state = reactive({

    })
    return { state, account: computed(() => AppState.account) }
  }
}
</script>

<style scoped>

</style>
