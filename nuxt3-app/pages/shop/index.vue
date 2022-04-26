<script setup>
import Product from '../../components/Product.vue'
import { useStore } from '../../store';
import { ref } from 'vue'

const store = useStore()
const filters = ['TOUS', 'MAISON', 'MODE']
const currentFilter = ref('TOUS')

const updateFilters = (filter) => currentFilter.value = filter;
const products = ref(store.getProducts)

console.log('teeeest')
</script>

<template>
  <div>
    <header>
      <div id="presentation">
        <h1>Optez pour un produit, choisissez votre tissu et c’est parti.</h1>
        <p>
          Bienvenue dans la Boutique de Zorro en Couleur.<br>
          Fiers de notre savoir faire, nous vous offrons la possibilité de choisir le produit
          qu’il vous faut dans votre tissu préféré. Nous le fabriquons sur commande rien que
          pour vos beaux yeux et vous le livrons directement à la maison !
        </p>
      </div>
    </header>
    <main>
      <section id="filters">
      <span
          v-for="(item, index) in filters"
          :key="index"
          @click="updateFilters(item)"
          :class="{ active : item == currentFilter }"
      >
        {{ item }}
      </span>
      </section>
      <section id="products">
        <h2>Nos produits</h2>
        <div id="product-items-container">
          <Product
              v-for="item in products"
              :key="item.uuid"
              :data="item"
              :class="{
            hidden :
            currentFilter != 'TOUS' &&
            currentFilter != item.category.toUpperCase()
          }"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
body {
  background: #F6F9FC;
}

main,
#presentation {
  width: 70%;
  margin: 0 auto;
}

#presentation {
  margin: 50px auto;
}

#presentation h1 {
  font-size: 48px;
}

#presentation p {
  font-size: 24px;
}

#filters {
  margin-top: 100px;
}

#filters span {
  margin-right: 150px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.15s;
}

#filters span:hover,
#filters .active {
  color: #3CAAB1;
}

#products h2 {
  font-weight: 500;
  margin-top: 60px;
}

#product-items-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.hidden {
  display: none;
}
</style>
