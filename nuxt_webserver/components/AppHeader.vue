<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <nuxt-link to="/" ><h1>ShopZone</h1></nuxt-link>
      </div>
      <div class="search-bar" v-if="$device.isDesktop">
          <input type="text" placeholder="Search..." v-model="searchQuery">
          <button @click="search">Search</button>
        </div>
        <div class="user-actions" v-if="$device.isDesktop">
          <div class="language-dropdown">
            <button @click="toggleLanguageDropdown">{{ currentLanguage }}
              <span v-if="showLanguageDropdown">
                <font-awesome-icon icon="fa-solid fa-caret-up" />
              </span>
              <span v-else>
                <font-awesome-icon icon="fa-solid fa-caret-down" />
              </span>
            </button>
            <ul v-show="showLanguageDropdown">
              <li v-for="language in languages" :key="language.code">
                <a @click="changeLanguage(language)">{{ language.name }}</a>
              </li>
            </ul>
          </div>
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <font-awesome-icon icon="fa-solid fa-bell" />
          <font-awesome-icon icon="fa-solid fa-user" />
        </div>
    <div v-else>
        <div class="user-actions">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <font-awesome-icon icon="fa-solid fa-bell" />
          <font-awesome-icon icon="fa-solid fa-bars" @click="toggleMenu"/>
        </div>
      </div>
    </div>
  <div class="search-bar" v-if="!$device.isDesktop">
    <input type="text" placeholder="Search..." v-model="searchQuery">
    <button @click="search">Search</button>
  </div>
  <Accordion v-if="!$device.isDesktop && isShowmenu" @triggerToggleMenu="toggleMenu" :items="accordionsitems" />
  </header>
</template>

<script>
export default{
  data(){
    return {
      searchQuery:'',
      currentLanguage: 'English',
      languages: [
        { code: 'eng', name: 'English' },
        { code: 'zhs', name: 'Chinese' },
        { code: 'frc', name: 'French' },
        { code: 'deu', name: 'Dutch' },
        { code: 'ita', name: 'Italy' },
        { code: 'jpn', name: 'Japanese' },
        { code: 'por', name: 'Portuguese' },
        { code: 'rus', name: 'Rusia' },
        { code: 'spu', name: 'Spanish' },
        { code: 'vie', name: 'Vietnamese' },
        { code: 'ara', name: 'Arabic' },
        { code: 'rou', name: 'Romania' }
      ],
      accordionsitems: [
        { name: 'Languages', code: [{ lang: 'English' },{ lang: 'Chinese' },{ lang: 'French' },{ lang: 'Dutch' },{ lang: 'Italy' },{ lang: 'Japanese' },{ lang: 'Portuguese' },{ lang: 'Rusia' },{ lang: 'Spanish' },{ lang: 'Vietnamese' },{ lang: 'Arabic' },{ lang: 'Romania' }] }
      ],
      showLanguageDropdown: false,
      isShowmenu: false
    }
  },
  methods: {
    search() {
      // Handle search functionality
    },
    toggleMenu () {
      this.isShowmenu = !this.isShowmenu;
    },
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown;
    },
    changeLanguage(language) {
      this.currentLanguage = language.name;
      this.showLanguageDropdown = false;
    },
  }
}
</script>

<style scoped lang="scss">
/* Base styles */
$primary-color: #333;
$secondary-color: #007bff;

.header {
  padding: 0rem 2rem;
  background-color: $secondary-color;
  box-shadow: 0 3px 7px #333;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.logo {
  a {
    color:#fff;
  }
}
/* Search bar */
.search-bar {
  margin: 1rem;
  input {
    width: 35vw;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    flex: 1;
    margin-right: 0.5rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: $primary-color;
    color: #fff;
    cursor: pointer;
  }
}

/* User actions */
.user-actions {
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    padding: 0 10px;
  }
}

@media (max-width: 768px) {
  .header{
    padding: 1rem 0.5rem;
  }
  .search-bar{
    display: flex;
    margin: 0.7rem 0;
  }
}

// Additional styles for the language dropdown
.language-dropdown {
  position: relative;
  display: inline-block;
  
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
  
  ul {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    list-style: none;
    padding: 0;
    z-index: 1;
    height: 200px;
    overflow-y: auto;

      &::-webkit-scrollbar {
				width: 8px;
			}
			&::-webkit-scrollbar-thumb {			
				border-radius: 10px;
				background-color: rgba(144, 147, 153, 0.3);
				transition: .3s rgba(144, 147, 153, 0.3);
			}
			&::-webkit-scrollbar-track {
				display:none;
			}
    
    li {
      padding: 0.5rem 1rem;
      cursor: pointer;
      
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
}


</style>
