<template>
  <header>
    <Navigation/>
  </header>
  <main>
    <div id="presentation">
      <h1>Optez pour un produit, choisissez votre tissu et c’est parti.</h1>
      <p>
        Bienvenue dans la Boutique de Zorro en Couleur.<br>
        Fiers de notre savoir faire, nous vous offrons la possibilité de choisir le produit
        qu’il vous faut dans votre tissu préféré. Nous le fabriquons sur commande rien que
        pour vos beaux yeux et vous le livrons directement à la maison !
      </p>
    </div>
    <div id="filters">
      <span
        v-for="(element, index) in filters"
        :key="index"
        @click="updateFilters(index)"
        :class="{ active : index == currentFilter }"
      >
        {{ element }}
      </span>
    </div>
  </main>
</template>
<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Shop',
  components: {
    Navigation,
  },
  data: () => ({
    filters: ['TOUS', 'MAISON', 'MODE'],
    currentFilter: 0
  }),
  methods: {
    updateFilters(index) {
      this.currentFilter = index
    }
  }
}
</script>
<style>
body {
  background: white;
  padding: 0;
  margin: 0;
  font-family: 'Inter';
}

main {
  width: 65%;
  margin: 0 auto;
}

#presentation {
  margin: 50px 0;
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
  margin-right: 120px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.15s;
}

#filters span:hover,
#filters .active {
  color: #3CAAB1
}
</style>
