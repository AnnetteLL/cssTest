<template>
  <div id="app">
    <category class="category"/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import category from './components/category/Category.vue'

export default {
  components: {
    category,
  },
  methods: {

  }
}
</script>

<style>
  @import '@/assets/css/base.css';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
  }
  .category {
    width: 260px;
  }
</style>
