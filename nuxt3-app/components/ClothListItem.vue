<script setup>
import ClothDetail from './ClothDetail.vue'
import { useStore } from '../store';

const props = defineProps({
  cloth: Object
})

const store = useStore()
const isModalDisplayed = ref(false)

const triggerModal = () => isModalDisplayed.value = !isModalDisplayed.value
</script>

<template>
  <div>
    <ClothDetail v-if="isModalDisplayed" :current-cloth="cloth" @hide-modal="triggerModal"/>
    <div class="item">
      <img :src="cloth.picture" @click="triggerModal(cloth.id)">
      <h3>{{ cloth.nickname }}</h3>
    </div>
  </div>
</template>

<style scoped>
#cloth-list {
  width: fit-content;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.item {
  width: fit-content;
  margin-right: 20px;
  margin-bottom: 20px;
}

.item img {
  width: 225px;
  height: 225px;
  cursor: pointer;
}

.item h3 {
  margin-top: 10px;
  font-weight: 100;
  font-size: 16px;
}
</style>
