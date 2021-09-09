<template>
  <div id="filter">
    <h2>Filtrer par</h2>
    <h3>Type de produits</h3>
    <ul>
      <li v-for="item in products" :key="item" @input="updateFilter(item.id, $event.target.checked)">
        <input type="checkbox" :name="item.name">
        <label :for="item.name">{{ item.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Filter",
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    productFilters: []
  }),
  methods: {
    updateFilter(id, checked) {
      if (checked)
        this.productFilters.push(id);
      else
        this.productFilters = this.productFilters.filter(item => item !== id);
      this.$store.commit('updateProductsFilter', this.productFilters);
    }
  }
}
</script>

<style scoped>
#filter {
  background: #F6E9CD;
  margin-top: 100px;
  min-height: 100vh;
  width: fit-content;
  padding-right: 40px;
}

#filter h2 {
  margin: 0;
  padding: 19px 8px 0px 14px;
  font-size: 24px;
  font-weight: 600;
}

#filter h3 {
  font-size: 16px;
  padding-left: 14px;
  font-weight: 500;
}

ul {
  padding-left: 14px;
  padding-right: 15px;
}

ul li {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 7px 0;
}

ul li label {
  font-size: 14px;
  margin: auto 0;
}
</style>
