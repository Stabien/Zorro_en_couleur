<template>
  <Navigation/>
  <h1>{{ productName }}</h1>
  <TheProductDetailCarousel :data="currentProduct.photo"/>
</template>
<script>
import Navigation from '../components/Navigation.vue'
import TheProductDetailCarousel from '../components/TheProductDetailCarousel.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ProductDetail',
  components: {
    Navigation,
    TheProductDetailCarousel
  },
  computed: {
    productName() {
      return useRoute().path.split('/')[2];
    },
    currentProduct() {
      for (const item of this.$store.getters.getProducts)
        if (item.name == this.productName)
          return item;
      return {};
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 48px;
  margin-Left: 20%;
}
</style>
