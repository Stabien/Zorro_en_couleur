<template>
  <div
    class="cloth"
    :class="{ selected: selectedCloth == data.id }"
  >
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
    },
    selectedCloth: {
      required: true,
      type: Number
    }
  },
  methods: {
    getImgUrl(path) {
      if (path)
        return require('@/' + path);
      return null;
    },
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
  margin: 50px 20px;
  margin-left: 0;
  border-radius: 20px;
  border: 1px solid #EAEBEE;
  cursor: pointer;
}

.cloth h2 {
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  margin: 5px auto;
}

.selected {
  padding: 11px;
  padding-bottom: 1px;
  border: 5px solid #3CAAB1;
}
</style>
