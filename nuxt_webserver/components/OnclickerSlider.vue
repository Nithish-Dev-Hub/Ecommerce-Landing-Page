<template>
    <div class="container">
        <h1>Featured Brands</h1>
        <div class="carousel-container">
            <button class="carousel-nav prev" @click="prevSlide">
                <
            </button>
            <ul class="carousel-wrapper" ref="carouselWrapper">            
                <li class="carousel-wrapper-items" v-for="(items, index) in subSections" :key="index">
                    <img :src="items.imageURL"/>
                    <div>
                        <span>{{ items.title }}</span>
                    </div>
                </li>
            </ul>
            <button class="carousel-nav next" @click="nextSlide">
                >
            </button>
        </div>
    </div>
  </template>
  
<script>
export default {
    props:{
        subSections:{
            type: Array,
            default:[]
        }
    },
    methods:{
        prevSlide() {
            const element = this.$refs.carouselWrapper;
            element.scrollLeft -= 100;
            console.log("prev");
        },
        nextSlide() {
            const element = this.$refs.carouselWrapper;
            element.scrollLeft += 100;
            console.log("next");
        },
    }
  };
</script>
  
<style scoped lang="scss">
.container {
    background-color: #fff;
    margin: 10px 0;
    h1{
        padding-left: 10px;
    }
}
.carousel-container {
    display: flex; /* Allow buttons to sit side-by-side */
    position: relative; /* Necessary for absolute positioning of buttons */
}

.carousel-wrapper {
    overflow: hidden; /* Hide overflow for content scrolling */
    width: 100%; /* Ensure content fills the width available */
    display: flex; /* Allow horizontal content arrangement */
    white-space: nowrap; /* Prevent content from wrapping */
    //   transition: transform 0.3s ease-in-out; /* Smooth transition on slide change */
    // background-color: #fff;
    height: auto;
    scroll-behavior: smooth;
    &-items{
        padding: 10px 20px;
        img {
            @media (max-width: 769px){ 
                width:80vw;
            }
            
        }
    }
}

.carousel-nav {
    position: absolute; /* Position buttons absolutely within the container */
    top: 50%; /* Center buttons vertically */
    transform: translateY(-50%); /* Account for button height */
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    color: white; /* Button text color */
    border: none; /* Remove button borders */
    padding: 10px; /* Add some padding for visual appeal */
    cursor: pointer; /* Indicate clickable behavior */
}

.carousel-nav.prev {
    left: 0; /* Position left button at the beginning */
    padding: 35px 25px;
}

.carousel-nav.next {
    right: 0; /* Position right button at the end */
    padding: 35px 25px;
}
</style>