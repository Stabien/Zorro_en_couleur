<template>
  <Navigation/>
  <h1>{{ productName }}</h1>
  <div id="product-presentation">
    <TheProductDetailCarousel :data="currentProduct.photo"/>
    <div id="description">
      <p>
        La trousse est conçue avec deux tissus de votre choix, pour l’intérieur et l’extérieur.
        Parce que nous on pense que le principal, c’est ce qu’il y a à l’intérieur.
        blablabka textete xtefeuue Disponible en deux tailles.
      </p>
    </div>
  </div>
  <main>
    <div id="cloths">
      <ClothToChoose
        v-for="item in cloths"
        :data="item"
        :key="item.id"
        @click="updateSelectedCloth(item.id)"
        :selectedCloth="selectedCloth"
      />
    </div>
  </main>
</template>
<script>
import Navigation from '../components/Navigation.vue'
import TheProductDetailCarousel from '../components/TheProductDetailCarousel.vue'
import ClothToChoose from '../components/ClothToChoose.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ProductDetail',
  components: {
    Navigation,
    TheProductDetailCarousel,
    ClothToChoose
  },
  data: () => ({
    selectedCloth: -1
  }),
  methods: {
    updateSelectedCloth(id) {
      this.selectedCloth = id;
    }
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
    },
    cloths() {
      return this.$store.getters.getCloths;
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 48px;
  margin-Left: 20%;
}

#product-presentation {
  display: block;
  position: relative;
  background: white;
  padding: 50px 0;
  overflow-x: hidden;
}

#description {
  width: 70%;
  margin: auto;
  margin-top: 60px;
}

main {
  width: 70%;
  margin: auto;
}

#cloths {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
