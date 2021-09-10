<template>
  <a href="#" class="product">
    <img src="@/assets/masque.png"/>
    <div class="product-infos">
      <span>MAISON</span>
      <h2>BOUILLOTE</h2>
      <p>A partir de</p>
      <h3>14,00 €</h3>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Product'
}
</script>

<style scoped>
.product {
  display: block;
  background: white;
  border: 12px solid white;
  border-radius: 20px;
  width: 300px;
  text-decoration: none;
  color: black;
  margin: 20px 30px;
  margin-left: 0;
}

.product img {
  width: 300px;
  height: 300px;
}

.product-infos {
  margin-top: 10px;
  padding-left: 20px;
}

.product-infos span {
  font-size: 14px;
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
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 14px;
  color: #3CAAB1;
}

.product-infos h3 {
  margin-top: 0px;
  color: #3CAAB1;
  font-size: 20px;
}
</style>
