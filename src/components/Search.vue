<template>
  <div class="Search row">
    <input class="bg-fade border text-white col-10" type="text" placeholder="search">
    <button class="col-2 btn btn-outline-info rounded-0">
      <i class="fa fa-search" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
export default {
  name: 'Search',
  setup() {
    const state = reactive({

    })
    return { state }
  }
}
</script>

<style scoped>

</style>
