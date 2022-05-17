<script setup>
const props = defineProps({
  currentCloth: Object,
})
const emit = defineEmits(['hideModal'])
const hideModal = () => emit('hideModal')
const imgUrl = `../${props.currentCloth.picture}`
</script>

<template>
  <div class="font-archivo absolute top-0 left-0">
    <div class="fixed bg-black opacity-50 w-full" @click="hideModal" id="background"></div>
    <div class="grid grid-rows-2 gap-4 rounded-3xl sm:grid-rows-1 sm:grid-cols-2 sm:gap-5" id="cloth-detail">
      <div>
        <img class="rounded-3xl w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80" :src="imgUrl" />
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2 md:mb-4">{{ currentCloth.nickname.toUpperCase() }}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam
        </p>
        <h4 class="mt-4 text-md font-semibold">Composition : 100% {{ currentCloth.material }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
#background {
  position: fixed;
  background: black;
  opacity: 0.5;
  width: 100%;
}

#cloth-detail {
  width: 700px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 35px;
  z-index: 1000;
}

@media all and (min-width: 640px) and (max-width: 768px) {
  #cloth-detail {
    width: 500px;
  }
}

@media all and (max-width: 639px) {
  #cloth-detail {
    width: 280px;
  }
}
</style>
