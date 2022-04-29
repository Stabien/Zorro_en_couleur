<template>
    <div
      id="container-img"
      :style="{
        transform: 'translateX(' + this.currentPosition + 'px)',
        transition: this.transition
      }"
    >
      <div class="slide-container">
        <img
          src="~/assets/coussin.png"
          :style="{ transition: this.transition }"
          :class="{
            active: currentSlide == 0,
            hidden: currentSlide > 1,
            isPrevious: currentSlide >= 1
          }"
        />
      </div>
      <div class="slide-container">
        <img
          src="~/assets/cravate.png"
          :style="{ transition: this.transition }"
          :class="{
            active: currentSlide == 1,
            hidden: currentSlide > 2,
            isPrevious: currentSlide >= 2,
          }"
        />
      </div>
      <div class="slide-container">
        <img
          src="~/assets/bouillote.png"
          :style="{ transition: this.transition }"
          :class="{
            active: currentSlide == 2,
            hidden: currentSlide > 3,
            isPrevious: currentSlide >= 3,
            isNext: currentSlide <= 1
          }"
        />
      </div>
      <div class="slide-container">
        <img
          src="~/assets/coussin.png"
          :style="{ transition: this.transition }"
          :class="{
            active: currentSlide == 3,
            hidden: (currentSlide > 4 || currentSlide < 2),
            isPrevious: currentSlide >= 4,
            isNext: currentSlide <= 2
          }"
        />
      </div>
      <div class="slide-container">
        <img
          src="~/assets/cravate.png"
          :style="{ transition: this.transition }"
          :class="{
            active: currentSlide == 4,
            hidden: currentSlide < 3,
            isPrevious: currentSlide >= 5,
            isNext: currentSlide <= 3
          }"
        />
      </div>
      <div class="slide-container">
        <img
          src="~/assets/bouillote.png"
          :style="{ transition: this.transition }"
          :class="{
            active: currentSlide == 5,
            hidden: currentSlide < 4,
            isNext: currentSlide >= 4
          }"
        />
      </div>
      <div class="slide-container">
        <img
          src="~/assets/coussin.png"
          :style="{ transition: this.transition }"
          :class="{
            active: currentSlide == 6,
            hidden: currentSlide < 5,
            isNext: currentSlide >= 5
          }"
        />
      </div>
      <div
        id="arrows"
        :style="{
          transform: 'translateX(' + (-this.currentPosition) + 'px)',
          transition: this.transition
        }"
      >
        <img src="~/assets/left.png" @click="updateCurrentSlide(-1)"/>
        <img src="~/assets/right.png" @click="updateCurrentSlide(1)"/>
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

          // Reset the loop
          setTimeout(() => {
            this.transition = '0.35s';
            this.currentPosition += 420;
            this.currentSlide -= 1;
          }, 0);
        }
        else if (this.currentSlide + positionUpdate > 5) {
          this.currentSlide = 1;
          this.currentPosition = 840;
        }
        else {
          this.currentSlide += positionUpdate;
          this.currentPosition -= 420 * positionUpdate;
        }

        // Reset the loop with next button
        if (this.currentSlide >= 4 && this.slide) {
          setTimeout(() => {
            this.transition = '0s';
            this.currentSlide -= 3;
            this.currentPosition += 1260;
          }, 350)
        }

        // Reset the loop with previous button
        if (this.currentSlide <= 1 && this.slide) {
          setTimeout(() => {
            this.transition = '0s';
            this.currentSlide += 3;
            this.currentPosition -= 1260;
          }, 350)
        }

        // Disable slide for 350 ms to avoid animation issue
        this.slide = false;
        setTimeout(() => this.slide = true, 350);
      }
    }
  },
}
</script>
<style>
#container-img {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
}

.isPrevious {
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
}

.isNext {
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
}

#container-img .hidden {
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
  padding: 14px;
  border-radius: 50px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  margin: auto 10px;
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
