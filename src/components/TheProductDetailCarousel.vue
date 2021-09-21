<template>
  <div id="container">
    <div id="container-img" :style="{ transform: 'translateX(' + this.currentPosition + 'px)' }">
      <div class="slide-container">
        <img src="@/assets/coussin.png" :class="{ active: currentSlide == 0, display: currentSlide > 1 }"/>
      </div>
      <div class="slide-container">
        <img src="@/assets/cravate.png" :class="{ active: currentSlide == 1, display: currentSlide > 2 }"/>
      </div>
      <div class="slide-container">
        <img src="@/assets/bouillote.png" :class="{ active: currentSlide == 2 }"/>
      </div>
      <div class="slide-container">
        <img src="@/assets/coussin.png" :class="{ active: currentSlide == 3, display: currentSlide < 2 }"/>
      </div>
      <div class="slide-container">
        <img src="@/assets/cravate.png" :class="{ active: currentSlide == 4, display: currentSlide < 3 }"/>
      </div>
      <div id="arrows" :style="{ transform: 'translateX(' + (this.currentPosition * -1) + 'px)' }">
        <img src="@/assets/left.png" @click="updateCurrentSlide(-1)"/>
        <img src="@/assets/right.png" @click="updateCurrentSlide(1)"/>
      </div>
    </div>
    <div id="description">

    </div>
  </div>
</template>
<script>
export default {
  name: 'TheProductDetailCarousel',
  props: {
    data: {
      type: String,
      required: true
    }
  },
  data: () => ({
    currentSlide: 2,
    currentPosition: 0
  }),
  methods: {
    getImgUrl(path) {
      if (path)
        return require('@/' + path);
      return null;
    },
    updateCurrentSlide(positionUpdate) {
      if (this.currentSlide + positionUpdate < 1) {
        this.currentSlide = 3;
        this.currentPosition = -460;
      } else if (this.currentSlide + positionUpdate > 3) {
        this.currentSlide = 1;
        this.currentPosition = 460;
      } else {
        this.currentSlide += positionUpdate;
        this.currentPosition -= 460 * positionUpdate;
      }
      console.log(this.currentPosition);
      console.log(this.currentSlide);
    }
  },
}
</script>
<style>
#container {
  background: white;
  padding: 50px 0;
  overflow-x: hidden;
}

#container-img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: 0.35s;
  overflow-x: hidden;
}

.slide-container {
  display: flex;
  width: 420px;
  height: 420px;
  margin: auto 20px;
  transition: 0.35s ease-out;
}

.slide-container img {
  display: block;
  width: 300px;
  height: 300px;
  margin: auto;
  opacity: 0.5;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
  transition: 0.35s ease-out;
}

#container-img .display {
  opacity: 0;
  width: 150px;
  height: 150px;
}

#container-img .active {
  width: 420px;
  height: 420px;
  opacity: 1;
  mask-image: none;
}

#arrows {
  position: absolute;
  width: 420px;
  height: 420px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: 0.35s;
}

#arrows img {
  display: block;
  width: 18px;
  height: 18px;
  padding: 14px;
  border-radius: 50px;
  opacity: 1;
  mask-image: none;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
}

#description {
  width: 70%;
  margin: auto;
  margin-top: 60px;
}

#description p {
  font-size: 26px;
}
</style>
