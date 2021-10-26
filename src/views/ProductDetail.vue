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
    <h2>ETAPE 1 - CHOISI TON TISSU :</h2>
    <div id="cloths">
      <ClothToChoose
        v-for="item in cloths"
        :data="item"
        :key="item.id"
        @click="updateSelectedCloth(item.id)"
        :selectedCloth="selectedCloth"
      />
    </div>
    <h2>ETAPE 2 - C'EST TOUT BON POUR TOI ?</h2>
    <CommandSummary
      :productName="productName"
      :selectedCloth="selectedCloth"
    />
    <h3>{{ currentProduct.price }},00 € <span>/ l'unité</span></h3>
    <button @click="displayPopup()">Ajouter au panier</button>
    <span
      id="error-message"
      v-if="displayErrorMessage"
    >
      Tu n’as pas sélectionné le tissu dans lequel tu souhaites voir fabriqué ton produit.
    </span>
    <TheAddedToCartPopup
      v-if="isPopupVisible"
      @hide="hidePopup()"
    />
  </main>
</template>
<script>
import Navigation from '../components/Navigation.vue'
import TheProductDetailCarousel from '../components/TheProductDetailCarousel.vue'
import ClothToChoose from '../components/ClothToChoose.vue'
import CommandSummary from '../components/CommandSummary.vue'
import TheAddedToCartPopup from '../components/TheAddedToCartPopup.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ProductDetail',
  components: {
    Navigation,
    TheProductDetailCarousel,
    ClothToChoose,
    CommandSummary,
    TheAddedToCartPopup
  },
  data: () => ({
    selectedCloth: -1,
    isPopupVisible: false,
    displayErrorMessage: false
  }),
  methods: {
    updateSelectedCloth(id) {
      this.selectedCloth = id;
      this.displayErrorMessage = false;
    },
    displayPopup() {
      if (this.selectedCloth != -1)
        this.isPopupVisible = true;
      else
        this.displayErrorMessage = true;
    },
    hidePopup() {
      this.isPopupVisible = false;
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
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
}

h2 {
  margin-top: 60px;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 0;
}

#cloths {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

h3 {
  margin-top: 80px;
  margin-bottom: 20px;
  font-size: 42px;
  font-weight: 600;
  color: #373F41;
}

h3 span {
  font-size: 18px;
}

button {
  margin-bottom: 20px;
  border: none;
  border-radius: 30px;
  background: #3CAAB1;
  color: white;
  padding: 15px 40px;
  font-size: 15px;
  cursor: pointer;
  width: fit-content;
}

#error-message {
  color: red;
  margin: 5px 0;
  font-size: 18px;
}
</style>
