<script setup>
import Layout from './layouts/Layout';
import { useStore } from './store';

const store = useStore()

fetch('http://localhost:4000/api/cloth')
  .then(response => response.json())
  .then(response => store.fillCloths(response));
// API request to get all cloths
fetch('http://localhost:4000/api/product')
  .then(response => response.json())
  .then(response => store.fillProducts(response));

</script>

<template>
  <div>
    <Layout/>
  </div>
</template>