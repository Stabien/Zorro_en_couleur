<template>
  <div @click="redirectToProductDetail" class="product">
    <img :src="getImgUrl(data.picture)"/>
    <div class="product-infos">
      <span>{{ data.category.toUpperCase() }}</span>
      <h2>{{ data.name.toUpperCase() }}</h2>
      <p>A partir de</p>
      <h3>{{ data.price }},00 €</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  methods: {
    getImgUrl(path) {
      return require('@/' + path);
    },
    redirectToProductDetail() {
      this.$router.push({ path: `/boutique/${this.data.name.toLowerCase()}`, query: { uuid: this.data.uuid } });
    }
  }
}
</script>

<style scoped>
.product {
  display: block;
  background: white;
  border: 1px solid #EAEBEE;
  padding: 12px;
  border-radius: 15px;
  width: 285px;
  text-decoration: none;
  color: black;
  margin: 20px 0;
}

.product img {
  width: 285px;
  height: 285px;
}

.product-infos {
  margin-top: 10px;
  padding-left: 20px;
}

.product-infos span {
  display: block;
  font-size: 12px;
  color: #A3A3A3;
  font-weight: 400;
}

.product-infos h2 {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 400;
}

.product-infos p {
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 12px;
  color: #3CAAB1;
}

.product-infos h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #3CAAB1;
  font-size: 20px;
}
</style>
