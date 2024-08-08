<template>
  <div>
    <Carousel :slides="slides"/>
    <SliderHorizontal :sub-sections="subSections" />
    <div class="offer-banner">
      <div class="items" v-for="(items, index) in imgBanners" :key="index">
        <img :src="items"/>
      </div>       
    </div>
    <OnclickerSlider :sub-sections="clickSlidedata" />
  </div>
</template>

<script setup>
definePageMeta({
  validate: async (route) => {
    const languagePattern = /^(eng|zhs|frc|deu|ita|jpn|por|rus|spu|vie|ara|rou)$/;

    const language = route.params.lang;
    
    if (!languagePattern.test(language)) {
      console.error(`Invalid language parameter: ${language}`);
      return { statusCode: 404, message: 'Page not found' };
    }

    return true;

  }
})
</script>
<script>
export default {
  name: 'App',
  data() {
    return {
      slides: [
        "https://rukminim2.flixcart.com/fk-p-flap/2500/1667/image/0708aceebaa520ab.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/2500/1667/image/520aa168ccdfb1ae.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/2500/1667/image/2ba4c007e5dc0418.jpg?q=20"
      ],
      subSections: [
          { imageURL: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100", title: "Grocery" },
          { imageURL: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100", title: "Mobile" },
          { imageURL: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100", title: "Fashion" },
          { imageURL: "https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100", title: "Electronics" },
          { imageURL: "https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100", title: "Furnitures" },
          { imageURL: "https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100", title: "Toys" },
          { imageURL: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100", title: "Appliances" },
          { imageURL: "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100", title: "Travel" },
          { imageURL: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100", title: "Motors" },
      ],
      imgBanners: [
          "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/3f688904dc37f851.jpg?q=20",
          "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/5510bf4bd3cf3fcc.jpg?q=20",
          "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/65d5b94452ade61e.jpg?q=20",
          "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/b0a0d4fee4b42513.jpg?q=20",
          "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/d3566046be9a1ca3.jpg?q=20",
          "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/d374458a4e1b8840.jpg?q=20"
      ],
      clickSlidedata: [
          { imageURL: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/2d2cfa5b632d3b67.jpeg?q=20", title: "Tile 1" },
          { imageURL: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/a8007f211db6578a.png?q=20", title: "Tile 2" },
          { imageURL: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/319cfcf92d96aa28.png?q=20", title: "Tile 3" },
          { imageURL: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/0f04e3cb0c39c77e.png?q=20", title: "Tile 4" },
          { imageURL: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/353000d800191473.png?q=20", title: "Tile 5" },
          { imageURL: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/a951bb09fc395d5a.png?q=20", title: "Tile 6" }
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.offer-banner{
    display: grid;
    grid-template-columns: repeat(3, min-content);
    justify-items: center;
    justify-content: center;
    column-gap: 10px;
    .items{
      @media (max-width: 768px){
        width:100%;
        img {
          width: 47vw;
        }
      }     
      
      @media (max-width: 420px){
       width:90vw;
       img {
          width: 100%;
        }
      }
    }
    @media (max-width: 768px){
      grid-template-columns: repeat(2, min-content);
    }
    @media (max-width: 450px){
      grid-template-columns: repeat(1, min-content);
    }
}
</style>