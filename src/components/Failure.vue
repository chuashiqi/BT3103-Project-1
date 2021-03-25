<template>
  <div id="failure">
    <Header /><br>
    <img src="../assets/Failure.png">
    <p>Better luck next time! <br> The correct answer is {{this.$route.params.answer}}. <br> Click on the FAQ tab to learn more.</p>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
    methods: {
    }, 

    components: {
        Header
    }, 

    data() {
        return {
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

#failure {
  font-family: Righteous;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 20px;
  font-size: 45px;
}

img {
    width: 400px;
}
</style>
