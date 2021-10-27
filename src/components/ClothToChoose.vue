<template>
  <div
    class="cloth"
    :class="{ selected: selectedCloth == data.id }"
  >
  <div class="image-container">
    <img class="photo" :src="getImgUrl(data.photo)"/>
    <img
      class="eye-icon"
      src="@/assets/eye_icon.png"
      @click.stop="displayProductDetail"
    />
  </div>
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
    displayProductDetail() {
      this.$emit('displayClothDetail', this.data);
    }
  }
}
</script>
<style scoped>

.cloth {
  padding: 15px;
  padding-bottom: 5px;
  background: white;
  margin: 50px 0;
  border-radius: 20px;
  border: 1px solid #EAEBEE;
  cursor: pointer;
}

.cloth:hover .eye-icon {
  opacity: 1;
}

.image-container {
  position: relative;
}

.photo {
  width: 190px;
  height: 190px;
  border-radius: 20px;
}

.eye-icon {
  opacity: 0;
  width: 45px;
  height: 45px;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: 0.2s;
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
