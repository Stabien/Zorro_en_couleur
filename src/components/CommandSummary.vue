<template>
  <div id="summary">
    <div class="info-container">
      <h3>PRODUIT</h3>
      <span></span>
      <div class="right-title-container">
        <h3>{{ productName.toUpperCase() }}</h3>
      </div>
    </div>
    <div class="info-container">
      <h3>TISSU</h3>
      <span></span>
      <div class="right-title-container">
        <h3>{{ getClothName.toUpperCase() }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommandSummary',
  props: {
    productName: {
      required: true,
      type: String
    },
    selectedCloth: {
      required: true,
      type: Number
    }
  },
  computed: {
    getClothName() {
      for (let item of this.$store.getters.getCloths)
        if (item.id == this.selectedCloth)
          return item.nickname;
      return '???';
    }
  }
}
</script>
<style scoped>
#summary {
  width: calc(100% - 140px);
  margin: 40px auto;
  padding: 45px 70px;
  border-radius: 10px;
  background: white;
}

#summary h3 {
  font-weight: 400;
  font-size: 22px;
  overflow-wrap: break-word;
  margin: 0 auto;
}

.info-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  margin: 30px auto;
}

.info-container span {
  display: block;
  margin: auto 20px;
  margin-bottom: 7px;
  border-bottom: 1px dashed black;
  flex: 3;
}

.right-title-container {
  width: 150px;
  text-align: left;
  overflow-wrap: break-word;
}
</style>
