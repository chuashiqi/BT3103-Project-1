<template>
  <div id="failure">
    <Header /><br>
    <img src="../assets/Failure.png">
    <p>Better luck next time! <br> The correct answer was {{answer}}. <br> Click on the FAQ tab to learn more.</p>
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
            answer: this.$route.params.answer
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
  font-size: 45px;
}

img {
    width: 400px;
}
</style>
