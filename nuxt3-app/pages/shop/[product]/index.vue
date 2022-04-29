<script setup>
import TheProductDetailCarousel from '../../../components/TheProductDetailCarousel.vue'
import ClothToChoose from '../../../components/ClothToChoose.vue'
import CommandSummary from '../../../components/CommandSummary.vue'
import TheAddedToCartPopup from '../../../components/ThePopupAddToCart.vue'
import ClothDetail from '../../../components/ClothDetail.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useStore } from '../../../store'

const store = useStore()

const selectedCloth = ref('')
const isPopupVisible = ref(false)
const displayErrorMessage = ref(false)
const isModalDisplayed = ref(false)
const currentClothDetailData = ref({})
const cloths = ref(store.getCloths)

const url = '?' + useRoute().fullPath.split('?')[1]
const urlParams = new URLSearchParams(url)
const uuid = urlParams.get('uuid')

const currentProduct = computed(() => store.getProductByUuid(uuid))

const updateSelectedCloth = (uuid) => {
  selectedCloth.value = uuid
  displayErrorMessage.value = false
}

const displayPopup = () => {
  selectedCloth.value != '' ? (isPopupVisible.value = true) : (displayErrorMessage.value = true)
}
const hidePopup = () => {
  isPopupVisible.value = false
}
const clothDetailData = (data) => {
  isModalDisplayed.value = true
  currentClothDetailData.value = data
}

const triggerModal = () => (isModalDisplayed.value = !isModalDisplayed.value)
</script>

<template>
  <div v-if="currentProduct">
    <ClothDetail v-if="isModalDisplayed" :currentCloth="currentClothDetailData" @hide-modal="triggerModal" />
    <h1>{{ currentProduct.name }}</h1>
    <div id="product-presentation">
      <TheProductDetailCarousel :data="currentProduct.picture" />
      <div id="description">
        <p>
          La trousse est conçue avec deux tissus de votre choix, pour l’intérieur et l’extérieur. Parce que nous on
          pense que le principal, c’est ce qu’il y a à l’intérieur. blablabka textete xtefeuue Disponible en deux
          tailles.
        </p>
      </div>
    </div>
    <main>
      <h2>ETAPE 1 - CHOISI TON TISSU :</h2>
      <div id="cloths">
        <ClothToChoose
          v-for="cloth in cloths"
          :data="cloth"
          :key="cloth.uuid"
          :selectedCloth="selectedCloth"
          @click="updateSelectedCloth(cloth.uuid)"
          @displayClothDetail="clothDetailData"
        />
      </div>
      <h2>ETAPE 2 - C'EST TOUT BON POUR TOI ?</h2>
      <CommandSummary :productName="currentProduct.name" :selectedCloth="selectedCloth" />
      <h3>{{ currentProduct.price }},00 € <span>/ l'unité</span></h3>
      <button @click="displayPopup()">Ajouter au panier</button>
      <span id="error-message" v-if="displayErrorMessage">
        Tu n’as pas sélectionné le tissu dans lequel tu souhaites voir fabriqué ton produit.
      </span>
      <TheAddedToCartPopup v-if="isPopupVisible" @hide="hidePopup()" />
    </main>
  </div>
</template>

<style scoped>
h1 {
  font-size: 48px;
  margin-left: 20%;
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
  color: #373f41;
}

h3 span {
  font-size: 18px;
}

button {
  margin-bottom: 20px;
  border: none;
  border-radius: 30px;
  background: #3caab1;
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
