<script setup>
import ClothList from '../../components/ClothList.vue'
import { computed } from 'vue'
import { useStore } from '../../store'

const store = useStore()
const getClothsToDisplay = computed(() => store.getClothsToDisplay)
const getProducts = computed(() => store.getProducts)
</script>

<template>
  <div>
    <main>
      <section class="mx-auto">
        <div class="w-4/5 ml-0">
          <h2 class="font-semibold mb-2">Gallerie des tissus</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat, consectetur adipiscing elit.
          </p>
        </div>
        <ClothList :cloths="getClothsToDisplay" readonly />
      </section>
    </main>
  </div>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
}

section {
  margin-top: 30px;
  width: 70%;
}

h2 {
  font-size: 32px;
}
</style>
