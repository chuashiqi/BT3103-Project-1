<template>
  <div id="success">
    <Header /><br>
    <img src="../assets/Success.png">
    <p>You got it right! <br> 5 extra points have been awarded to your account.</p>
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

#success {
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

div {
  text-align: center;
}
</style>
