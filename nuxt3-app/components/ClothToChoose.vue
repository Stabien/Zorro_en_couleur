<template>
  <div>
    <ClothDetail v-if="isModalDisplayed" :current-cloth="cloth" @hide-modal="triggerModal" />
    <div class="cloth" :class="{ selected: selectedCloth == cloth.uuid }" @click="triggerModalReadonly">
      <div class="image-container">
        <img class="photo" :src="getImgUrl(cloth.picture)" />
        <img v-if="!readonly" class="eye-icon" src="@/assets/eye_icon.png" @click.stop="triggerModal" />
      </div>
      <h2>{{ cloth.nickname.toUpperCase() }}</h2>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  cloth: Object,
  selectedCloth: String,
  readonly: Boolean,
})

const isModalDisplayed = ref(false)

const triggerModal = () => (isModalDisplayed.value = !isModalDisplayed.value)

const getImgUrl = (path) => {
  if (path) return '../' + path
  return null
}
const triggerModalReadonly = () => {
  if (props.readonly) triggerModal()
}
</script>
<style scoped>
.cloth {
  padding: 15px;
  padding-bottom: 5px;
  background: white;
  margin: 50px 0;
  border-radius: 20px;
  border: 1px solid #eaebee;
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
  border: 5px solid #3caab1;
}
</style>
