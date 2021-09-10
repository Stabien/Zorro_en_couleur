<template>
  <ClothDetail :current-cloth="getClothDetailItem"/>
  <Navigation/>
  <main>
    <Filter :products="getProducts"/>
    <section>
      <div id="description">
        <h2>Gallerie des tissus</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat, consectetur adipiscing elit.</p>
      </div>
      <ClothList :cloths="getClothsToDisplay"/>
    </section>
  </main>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Filter from '../components/Filter.vue'
import ClothList from '../components/ClothList.vue'
import ClothDetail from '../components/ClothDetail.vue'

export default {
  name: 'Gallery',
  components: {
    Navigation,
    Filter,
    ClothList,
    ClothDetail
  },
  computed: {
    getClothsToDisplay() {
      return this.$store.getters.getClothsToDisplay;
    },
    getProducts() {
      return this.$store.getters.getProducts;
    },
    getClothDetailItem() {
      if (this.$store.getters.getCloths.length > 0) {
        for (let item in this.$store.getters.getCloths) {
          if (this.$store.getters.getClothDetailId == this.$store.getters.getCloths[item].id)
            return this.$store.getters.getCloths[item];
        }
      }
      return [];
    }
  },
  mounted() {
    // API request to get all products
    fetch('http://localhost:4000/api/cloth')
      .then(response => response.json())
      .then(response => this.$store.commit('fillCloths', response.recordset));
    // API request to get all cloths
    fetch('http://localhost:4000/api/product')
      .then(response => response.json())
      .then(response => this.$store.commit('fillProducts', response));
    // API Request get all categories
    fetch('http://localhost:4000/api/category')
      .then(response => response.json())
      .then(response => this.$store.commit('fillCategories', response.recordset));
  }
}
</script>

<style scoped>
#tab-name {
  margin-left: 260px;
}

main {
  display: flex;
  flex-direction: row;
}

section {
  margin-left: 100px;
  margin-top: 30px;
  width: 70%;
}

#description {
  width: 80%;
}

#description h2 {
  font-size: 32px;
}
</style>
