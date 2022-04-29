<script setup>
import Layout from './layouts/Layout'
import { useStore } from './store'
import { onMounted } from 'vue'
import { getCloths, getProducts } from './api'

const store = useStore()

onMounted(async () => {
  const cloths = await getCloths()
  const products = await getProducts()

  store.fillCloths(cloths)
  store.fillProducts(products)
})
</script>

<template>
  <div>
    <Layout />
  </div>
</template>
