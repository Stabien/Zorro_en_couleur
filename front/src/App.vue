<template>
  <router-view/>
</template>
<script>
export default {
  mounted() {
    // API request to get all products
    fetch('http://localhost:4000/api/cloth')
      .then(response => response.json())
      .then(response => this.$store.commit('fillCloths', response));
    // API request to get all cloths
    fetch('http://localhost:4000/api/product')
      .then(response => response.json())
      .then(response => this.$store.commit('fillProducts', response));
  }
}
</script>
<style>
@font-face {
  font-family: 'Inter';
  src: url('./assets/fonts/Inter.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Archivo-Regular';
  src: url('./assets/fonts/Archivo-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  background: #F6F9FC;
  padding: 0;
  margin: 0;
  font-family: 'Archivo-Regular';
  line-height: 1.3;
}
</style>
