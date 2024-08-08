<template>
    <div class="accordion">
      <div class="accordion-title">
        <h2>Preferences:</h2>
        <font-awesome-icon @click="triggerToggle" icon="fa-solid fa-xmark" />
      </div>
      <div v-for="(item, index) in toggleItem" :key="index" class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion(index)">
          <div>{{ item.name }}</div>
          <div><font-awesome-icon icon="fa-solid fa-plus" /></div>
        </div>
        <div v-if="item.isOpen" class="accordion-content">
          <div class="accordion-content__item" v-for="(list, index) in item.code" :key="index">
            {{ list.lang }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    computed:{
        toggleItem() {
            return this.items;
        }
    },
    methods: {
      toggleAccordion(index) {
        this.items[index].isOpen = !this.items[index].isOpen;
      },
      triggerToggle(){
        this.$emit("triggerToggleMenu");
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  /* Add your styling for accordion here */
  $primary-color: #333;
  $secondary-color: #f5f5f5;

  .accordion {
    position: absolute;
    background-color: $secondary-color;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    padding: 25px;
    &-title{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .accordion-header {
    display: flex;
    margin: 1rem 0;
    border-bottom: 1px solid black;
    justify-content: space-between;
    align-items: center;
  }

  .accordion-content{
    
    &__item{
      margin: 15px 0;
      border-bottom: 1px solid #ccc;
    }
  }
  </style>
  