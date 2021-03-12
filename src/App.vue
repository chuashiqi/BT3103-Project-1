<template>
  <div id="app">
    <google-map />
    <!--HomePage /-->
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap.vue'
//import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    GoogleMap,
    //HomePage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Righteous');

#app {
  font-family: Righteous, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
