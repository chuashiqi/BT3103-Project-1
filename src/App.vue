<template>
  <div >
  <BenefitHistory></BenefitHistory>
  <Header> </Header>
      <router-view />
  </div>
</template>

<script>
import BenefitHistory from './components/BenefitHistory.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {Header, BenefitHistory

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
