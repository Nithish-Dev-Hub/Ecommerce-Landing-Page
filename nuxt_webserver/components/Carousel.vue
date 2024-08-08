<template>
    <div class="carousel">
      <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="slide">
          <img :src="slide" class="slide-image"/>
        </div>
      </div>
      <div class="indicators">
        <div v-for="(slide, index) in slides" :key="index" class="indicator" :class="{ active: index === currentIndex }" @click="goToSlide(index)"></div>
      </div>
  </div> 
</template>

<script>
export default{
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
        slides: {
            type: Array,
            default: []
        }
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      }, 6000);
    },
    goToSlide(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped lang="scss">
.carousel {
  width: auto;
  overflow: hidden;
  position: relative;
  margin:20px 0;
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
}
.slide-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.indicator {
  width: 30px;
  height: 5px;
  border-radius: 10px;
  background-color: #888;
  margin: 0 5px;
  cursor: pointer;
}

.indicator.active {
  background-color: #fff;
}


</style>