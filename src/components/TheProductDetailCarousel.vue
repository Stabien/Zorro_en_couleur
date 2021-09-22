<template>
  <div id="container">
    <div id="container-img" :style="{ transform: 'translateX(' + this.currentPosition + 'px)', transition: this.transition }">
      <div class="slide-container">
        <img src="@/assets/coussin.png" :style="{ transition: this.transition }" :class="{ active: currentSlide == 0, display: currentSlide > 1 }"/>
      </div>
      <div class="slide-container">
        <img src="@/assets/cravate.png" :style="{ transition: this.transition }" :class="{ active: currentSlide == 1, display: currentSlide > 2 }"/>
      </div>
      <div class="slide-container">
        <img src="@/assets/bouillote.png" :style="{ transition: this.transition }" :class="{ active: currentSlide == 2, display: currentSlide > 3 }"/>
      </div>
      <div class="slide-container">
        <img src="@/assets/coussin.png" :style="{ transition: this.transition }" :class="{ active: currentSlide == 3, display: (currentSlide > 4 || currentSlide < 2) }"/>
      </div>
      <div class="slide-container">
        <img src="@/assets/cravate.png" :style="{ transition: this.transition }" :class="{ active: currentSlide == 4, display: currentSlide < 3 }"/>
      </div>
      <div class="slide-container">
        <img src="@/assets/bouillote.png" :style="{ transition: this.transition }" :class="{ active: currentSlide == 5, display: currentSlide < 4 }"/>
      </div>
      <div class="slide-container">
        <img src="@/assets/coussin.png" :style="{ transition: this.transition }" :class="{ active: currentSlide == 6, display: currentSlide < 5 }"/>
      </div>
      <div id="arrows" :style="{ transform: 'translateX(' + (this.currentPosition * -1) + 'px)', transition: this.transition }">
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
    currentSlide: 3,
    currentPosition: 0,
    transition: '0.35s',
    slide: true
  }),
  methods: {
    getImgUrl(path) {
      if (path)
        return require('@/' + path);
      return null;
    },
    updateCurrentSlide(positionUpdate) {
      if (this.slide) {
        if (this.transition == '0s')
          this.transition = '0.35s';

        if (this.currentSlide + positionUpdate < 1) {
          this.transition = '0s';
          this.currentPosition -= 1260;
          this.currentSlide += 3;
          this.slide = false;
          setTimeout(() => {
            this.transition = '0.35s';
            this.currentPosition += 420;
            this.currentSlide -= 1;
          }, 0);
        } else if (this.currentSlide + positionUpdate > 5) {
          this.currentSlide = 1;
          this.currentPosition = 840;
        } else {
          this.currentSlide += positionUpdate;
          this.currentPosition -= 420 * positionUpdate;
        }

        if (this.currentSlide >= 4 && this.slide) {
          setTimeout(() => {
            this.transition = '0s';
            this.currentSlide -= 3;
            this.currentPosition += 1260;
          }, 350)
        }

        if (this.currentSlide <= 1 && this.slide) {
          setTimeout(() => {
            this.transition = '0s';
            this.currentSlide += 3;
            this.currentPosition -= 1260;
          }, 350)
        }
        this.slide = false;

        setTimeout(() => this.slide = true, 350);

        console.log(this.currentPosition);
        console.log(this.currentSlide);
      }
    }
  },
}
</script>
<style>
#container {
  display: block;
  position: relative;
  background: white;
  padding: 50px 0;
  overflow-x: hidden;
  height: 500px;
}

#container-img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
}

.slide-container {
  display: flex;
  width: 420px;
  min-width: 420px;
  height: 420px;
  margin: auto 0px;
  justify-content: center;
}

.slide-container img {
  display: block;
  width: 300px;
  height: 300px;
  opacity: 0.5;
  margin: auto;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
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
