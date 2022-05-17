<script setup>
import { ref } from 'vue'

const props = defineProps({
  categories: Array,
  defaultLabel: String,
})

const isSelectToggled = ref(false)
const currentItem = ref(0)
const currentLabel = ref(props.defaultLabel)

const toggleSelect = () => {
  isSelectToggled.value = !isSelectToggled.value
  currentItem.value =
    props.categories.indexOf(currentLabel.value) === -1 ? 0 : props.categories.indexOf(currentLabel.value)
  console.log(currentItem.value)
}
const updateCurrentItem = (value) => {
  currentItem.value = value
}

const updateLabel = (value) => (currentLabel.value = value)
</script>

<template>
  <div class="relative" @click="toggleSelect">
    <button
      class="select relative w-64 h-12 bg-white"
      :class="isSelectToggled ? 'toggled' : ''"
      name="select"
      value="options"
    >
      {{ currentLabel }}
    </button>
    <div v-if="isSelectToggled" class="w-64 mt-2 options">
      <p
        v-for="(category, index) in categories"
        :key="index"
        @click="updateLabel(category)"
        class="item active border-b border-gray border-width py-2 px-4"
        :class="currentItem === index ? 'current-item' : ''"
        @mouseover="updateCurrentItem(index)"
      >
        {{ category }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.select {
  position: relative;
  border-radius: 10px;
  border: 2px solid transparent;
  background: white;
  text-align: left;
  padding: 0 15px;
  font-size: 16px;
  cursor: pointer;
}

.toggled {
  border: 2px solid #3caab1;
  box-sizing: border-box;
}

.select::after {
  content: '';
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 6px;
  height: 6px;
  border-right: 2px solid #2f2f2f;
  border-bottom: 2px solid #2f2f2f;
}

.options {
  position: absolute;
  top: 40px;
  left: 0;
  background: white;
  border-radius: 10px;
  overflow: hidden;
}

.options.active {
  display: block;
}

.options .item {
  text-transform: capitalize;
  width: 100%;
  line-height: 30px;
  cursor: pointer;
}

.current-item {
  color: white;
  background: #3caab1;
}

.item:last-child {
  border: none;
}
</style>
