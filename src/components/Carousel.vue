<template>
  <div
    v-for="(item, index) in slideContent"
    class="news-content"
    :class="{ active: index == currentSlide }"
    :key="item"
  >
    <div class="news-left-side">
      <div class="img-test"></div>
      <div class="carousel">
        <div class="carousel-previous-next">
          <img src="@/assets/arrow.png" @click="displaySlide(currentSlide - 1)">
          <img src="@/assets/arrow.png" @click="displaySlide(currentSlide + 1)">
        </div>
        <div class="carousel-points">
          <span v-for="n in 3" :key="n" @click="displaySlide(n - 1)"
          :class="{ active: n - 1 == currentSlide }"></span>
        </div>
      </div>
    </div>
    <div class="news-right-side">
      <h3>{{ item.title }}</h3>
      <div class="news-infos">
        <img src="@/assets/logo_nav.png">
        <div class="news-infos-text">
          <h4>{{ item.firstInfo.title }}</h4>
          <p>{{ item.firstInfo.text }}</p>
          <a href="#">Découvrir</a>
        </div>
      </div>
      <div class="news-infos">
        <img src="@/assets/logo_nav.png">
        <div class="news-infos-text">
          <h4>{{ item.secondInfo.title }}</h4>
          <p>{{ item.secondInfo.text }}</p>
          <a href="#">Découvrir</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data: () => ({
    currentSlide: 0,
    slideRefs: [],
    slideContent: [
      {
        title: 'Nos nouveaux noeuds papillons',
        firstInfo: {
          title: 'Noeuds papillons à l\'ancienne 0',
          text: 'Lorem ipsum dolor sit amet, tempor incid idunt ut labore et dolore'
        },
        secondInfo: {
          title: 'Noeuds papillons à l\'ancienne',
          text: 'Lorem ipsum dolor sit amet, tempor incid idunt ut labore et dolore'
        }
      },
      {
        title: 'Nos nouveaux noeuds papillons',
        firstInfo: {
          title: 'Noeuds papillons à l\'ancienne 1',
          text: 'Lorem ipsum dolor sit amet, tempor incid idunt ut labore et dolore'
        },
        secondInfo: {
          title: 'Noeuds papillons à l\'ancienne',
          text: 'Lorem ipsum dolor sit amet, tempor incid idunt ut labore et dolore'
        }
      },
      {
        title: 'Nos nouveaux noeuds papillons',
        firstInfo: {
          title: 'Noeuds papillons à l\'ancienne 2',
          text: 'Lorem ipsum dolor sit amet, tempor incid idunt ut labore et dolore'
        },
        secondInfo: {
          title: 'Noeuds papillons à l\'ancienne',
          text: 'Lorem ipsum dolor sit amet, tempor incid idunt ut labore et dolore'
        }
      }
    ]
  }),
  methods: {
    setSlideRef(el) {
      if (el) this.slideRefs.push(el)
    },
    displaySlide(index) {
      if (index < 0) index = 2;
      if (index > 2) index = 0;
      if (index != this.currentSlide) {
        this.currentSlide = index;
      }
    }
  }
}
</script>

<style>
.news-content {
  display: flex;
  flex-direction: row;
  margin-left: -1040px;
  opacity: 0;
  transition: 0.6s;
}

.news-content:first-child {
  margin: auto;
}

.news-content.active {
  opacity: 1;
  z-index: 100;
}

.news-left-side {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}

.carousel {
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 10px;
  margin: auto;
  margin-top: 20px;
}

.carousel-previous-next {
  width: fit-content;
  margin: auto;
  margin-left: 450px;
  margin-top: -70px;
  margin-bottom: 30px;
}

.carousel-previous-next img {
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 0 3px;
  padding: 2px;
  border-radius: 25px;
}

.carousel-previous-next img:first-child {
  transform: rotate(-180deg);
}

.carousel-points {
  display: flex;
  flex-direction: row;
  margin: auto;
}

.carousel-points span {
  box-sizing: border-box;
  display: block;
  width: 10px;
  height: 10px;
  border: black 1px solid;
  margin: 0 5px;
  border-radius: 15px;
  cursor: pointer;
}

.carousel-points span.active {
  background: black;
}

.img-test {
  width: 700px;
  height: 450px;
  background: #DFDFDF;
}

.news-right-side {
  width: 350px;
  margin: auto 0;
  margin-left: -70px;
  background: #323232;
  padding: 30px;
  padding-top: 60px;
  padding-bottom: 10px;
  color: white;
}

.news-right-side h3 {
  display: block;
  width: fit-content;
  margin: auto;
  margin-top: -25px;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 20px;
}

.news-infos {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 40px;
  padding-right: 10px;
}

.news-infos-text {
  display: flex;
  flex-direction: column;
}

.news-infos img {
  width: 22px;
  height: 22px;
  margin-right: 15px;
  background: grey;
  border: none;
  border-radius: 15px;
}

.news-infos-text h4 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
}

.news-infos-text p {
  margin-top: 5px;
  margin-bottom: 10px;
  color: #CCCCCC;
  font-style: normal;
  font-size: 14px;
}

.news-infos-text a {
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: white;
}
</style>
