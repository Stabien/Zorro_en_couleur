<template>
  <div id="cloth-list">
    <div v-for="item in cloths" :key="item" :id="item.id" class="item">
      <img :src="getImgUrl(item.image)" @click="displayClothDetail(item.id)">
      <h3>{{ item.nickname }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClothList",
  props: {
    cloths: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImgUrl(path) {
      return require('@/' + path);
    },
    displayClothDetail(clothId) {
      this.$store.commit('updateClothDetail', { clothId: clothId, visibility: true });
    }
  }
}

</script>
<style scoped>
#cloth-list {
  width: fit-content;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.item {
  width: fit-content;
  margin-right: 20px;
  margin-bottom: 20px;
}

.item img {
  width: 225px;
  height: 225px;
  cursor: pointer;
}

.item h3 {
  margin-top: 10px;
  font-weight: 100;
  font-size: 16px;
}
</style>
