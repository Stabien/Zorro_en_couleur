<script setup>
import ClothListItem from './ClothListItem'
import { ref, computed } from 'vue'
import { useStore } from '../store'

const props = defineProps({
  cloths: Array,
  selectedCloth: String,
  readonly: Boolean,
})

const store = useStore()
const emit = defineEmits(['updateSelectedCloth'])

const isReadonly = props.readonly || false
const cloths = computed(() => store.getCloths)
const isModalDisplayed = ref(false)
const currentClothDetailData = ref({})

const displayClothDetailModal = (data) => {
  isModalDisplayed.value = true
  currentClothDetailData.value = data
}
const hideClothDetailModal = () => (isModalDisplayed.value = false)
const updateSelectedCloth = ($event, uuid) => {
  if ($event.target.className !== 'eye-icon' && !props.readonly) emit('updateSelectedCloth', uuid)
}
</script>

<template>
  <div class="flex flex-row flex-wrap mt-10 gap-10">
    <ClothDetail v-if="isModalDisplayed" :currentCloth="currentClothDetailData" @hide-modal="hideClothDetailModal" />
    <div class="" v-for="cloth in cloths" :key="cloth.uuid">
      <ClothListItem
        :readonly="isReadonly"
        :cloth="cloth"
        :key="cloth.uuid"
        :selectedCloth="selectedCloth"
        @click="updateSelectedCloth($event, cloth.uuid)"
        @displayModal="displayClothDetailModal(cloth)"
      />
    </div>
  </div>
</template>
