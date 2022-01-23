<template>
  <div id="cloth-detail-container">
    <div @click="hideClothDetail" id="background"></div>
    <div id="cloth-detail">
      <img :src="getImgUrl(currentCloth.picture)">
      <div id="description">
        <h2>{{ currentCloth.nickname }}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <h4>Composition : 100% {{ currentCloth.material }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClothDetail",
  props: {
    currentCloth: {
      type: Object,
      required: true
    }
  },
  methods: {
    hideClothDetail() {
      this.$emit('hideClothDetail');
    },
    getImgUrl(path) {
      return require('@/' + path);
    }
  }
}
</script>

<style scoped>
#cloth-detail-container {
  width: 100%;
  min-height: 100vh;
  position: absolute;
}

#background {
  position: fixed;
  background: black;
  opacity: 0.5;
  height: 100vh;
  width: 100%;
}

#cloth-detail {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  background: white;
  padding: 35px;
  width: auto;
  z-index: 1000;
}

#cloth-detail img {
  display: block;
  width: 320px;
  height: 320px;
}

#description {
  display: block;
  margin-left: 30px;
  width: 350px;
  height: 320px;
}

#description p {
  font-size: 13px;
}

#description h2 {
  margin: 0;
}

#description h3 {
  margin-bottom: 7px;
}

#description h4 {
  font-size: 13px;
}

ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 150px;
  margin-top: 5px;
  padding-left: 15px;
}

ul li {
  font-size: 14px;
  margin-bottom: 1px;
}
</style>
