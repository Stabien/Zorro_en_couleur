<template>
  <div class="cloth">
    <img :src="getImgUrl(data.photo)"/>
    <h2>{{ data.nickname.toUpperCase() }}</h2>
  </div>
</template>
<script>
export default {
  name: 'ClothToChoose',
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  methods: {
    getImgUrl(path) {
      if (path)
        return require('@/' + path);
      return null;
    }
  }
}
</script>
<style scoped>
.cloth img {
  width: 190px;
  height: 190px;
  border-radius: 20px;
}

.cloth {
  padding: 15px;
  padding-bottom: 5px;
  background: white;
  margin: 50px auto;
  margin-left: 0;
  border-radius: 20px;
  border: 1px solid #EAEBEE;
}

.cloth h2 {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  margin: 5px auto;
}
</style>
