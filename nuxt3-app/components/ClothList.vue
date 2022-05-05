<script setup>
import ClothDetail from './ClothDetail.vue'
import { useStore } from '../store'
import ClothListItem from './ClothListItem'
import ClothToChoose from './ClothToChoose'

const props = defineProps({
  cloths: Array,
})
</script>

<template>
  <div id="cloth-list">
    <div v-for="item in cloths" :key="item" :id="item.id">
      <ClothToChoose :cloth="item" readonly />
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
</style>
