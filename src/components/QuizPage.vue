<template>
  <div id="quiz">
    <h1 id="title">QUIZ</h1>
    <p id="question">Which bottle codes are recyclable?</p>
    <p id="point">5 points</p>
    <p id="options">A. 1,3,5 <br> B. 1,2,7 <br> C. 1,2,5 <br> D. 2,5,7</p>
    <label id="ans">Your Answer is</label> <input type="text" id="myans"/>
    <button id="submit" v-on:click=redirect()>Submit</button>
  </div>
</template>

<script>
export default {
    methods: {
      redirect: function() {
        var text=document.getElementById("myans").value;
        if (text == 'A') {
          this.$router.push("success")
        } else {
          this.$router.push("failure")
        }
      }
    }
}
</script>

<style>
#quiz {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#title {
  text-align: center;
  margin-top: 40px;
  font-size: 55px;
}

#question {
  text-align: center;
  margin-top: 20px;
  font-size: 45px;
}

#point {
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
}

#options {
  text-align: left;
  margin-top: 25px;
  margin-left: 200px;
  font-size: 40px;
}
#ans {
  text-align: left;
  margin-top: 25px;
  margin-left: 200px;
  font-size: 40px;
}

#myans {
  text-align: left;
  margin-top: 25px;
  margin-left: 20px;
  font-size: 30px;
}

#submit {
  margin-left: 20px;
  font-size: 20px;
  background-color: #5CAFAA;
  border-radius: 6px;
  border: 2px solid gray;
}
</style>