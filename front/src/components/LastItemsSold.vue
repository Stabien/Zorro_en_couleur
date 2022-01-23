<template>
  <div v-for="item in sells" class="sell-item" :key="item">
    <h3>{{ item.name }}</h3>
    <img alt="">
    <p>{{ item.description }}</p>
    <a href="#">J'EN VEUX UN !</a>
  </div>
</template>
<script>
export default {
  name: "LastItemsSold",
  data: () => ({
    sells: [
      {
        name: 'MARIE',
        articleId: 0,
        description: 'Retour client ou bien description de l\'article'
      },
      {
        name: 'MARIE',
        articleId: 0,
        description: 'Retour client ou bien description de l\'article'
      },
      {
        name: 'MARIE',
        articleId: 0,
        description: 'Retour client ou bien description de l\'article'
      },
      {
        name: 'MARIE',
        articleId: 0,
        description: 'Retour client ou bien description de l\'article'
      }
    ]
  })
}
</script>
<style>
.sell-item {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 300px;
  flex-grow: 1;
}

.sell-item h3 {
  font-size: 14px;
  color: #AAAAAA;
  padding-bottom: 8px;
  border-bottom: 2px solid;
}

.sell-item img {
  margin-top: 10px;
  height: 220px;
  width: auto;
  background: grey;
}

.sell-item p {
  font-weight: 600;
  font-size: 18px;
}

.sell-item a {
  margin-top: 30px;
  text-decoration: none;
  font-size: 14px;
  color: #AAAAAA;
  padding: 8px 12px;
  border: 1px solid;
  border-radius: 20px;
  width: fit-content;
}
</style>
