<template>
    <div>
        <ul class="sub-section">
            <li class="sub-section-items" v-for="(items, index) in subSections" :key="index">
                <img :src="items.imageURL"/>
                <div>
                    <span>{{ items.title }}</span>
                </div>
            </li>
        </ul>
      </div>
  </template>
  
<script>
export default {
    props:{
        subSections:{
            type: Array,
            default:[]
        }
    }
  };
</script>
  
<style scoped lang="scss">
.sub-section {
    display: flex;
    box-shadow: 0 3px 7px #ccc;
    background-color: #fff;
    overflow-x: auto; 
    @media (min-width: 769px){
      justify-content: space-around;
    }
    &-items{
      padding: 10px 20px;
    }
}
</style>