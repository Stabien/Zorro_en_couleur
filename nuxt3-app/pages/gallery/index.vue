<script setup>
import Filter from '../../components/Filter.vue'
import ClothList from '../../components/ClothList.vue'
import { useStore } from '../../store';

const store = useStore()
const getClothsToDisplay = store.getClothsToDisplay;
const getProducts = store.getProducts;

</script>

<template>
  <div>
    <main>
      <section>
        <div id="description">
          <h2>Gallerie des tissus</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat, consectetur adipiscing elit.
          </p>
        </div>
        <ClothList :cloths="getClothsToDisplay"/>
      </section>
    </main>
  </div>
</template>

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
