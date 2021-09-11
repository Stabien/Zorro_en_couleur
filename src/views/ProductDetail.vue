<template>
  <Navigation/>
</template>
<script>
import Navigation from '../components/Navigation.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ProductDetail',
  components: {
    Navigation
  },
  methods: {
    getProductName() {
      return useRoute().path.split('/')[2];
    }
  }
}
</script>

<style scoped>
</style>
