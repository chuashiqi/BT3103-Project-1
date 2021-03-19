<template>
<div id='faq'>
  <p v-html='name'></p>
</div>

<div id='faqleft'>
  <p> {{q1}} </p>
  <p> {{ans1}} </p>
  <p>
    <img src="https://www.ats-tanner.com/Marketing/News/image-thumb__6950__contentImage/Recycling-Codes.png">
  </p>
  <p>{{link1}}</p>
  
  <br></br>
  <p> {{q2}} </p>
  <p> {{ans2}} </p>
  </div>

<div id='faqright'>
  <br></br>
  <p> {{q3}} </p>
  <p> {{ans3}} </p>

  <br></br>
  <p> {{q4}} </p>
  <p> {{ans4}} </p>
</div>
</template>

<script>
var faq = new Vue({
  el:"#faq",
  data: {
    name: "<h1>FAQ</h1>"
  }
});

var left = new Vue({
  el: "#faqleft",
  data: {
    name: "<h1>FAQ</h1>",
    q1: "1. Can this be recycled?",
    ans1: "Kindly refer to the chart below. We accept bottles of codes 1, 2, and 5!",
    link1: "Still confused? Check here!",
    q2:"2. Where can I go to recycle my bottles?",
    ans2:"Click here to find recycling points near you!",
    
  }
});

var right = new Vue({
  el: "#faqright",
  data: {
    q3:"3. How do I prep my bottles for recycling?",
    ans3:"Rinse and dry your bottles thoroughly before bringing them to one of our bottle collecting stations.",
    q4:"4. What if my bottles are not recyclable?",
    ans4:"Kindly dispose of the bottles responsibly in a regular trash recepticle."
  }
});
</script>

<style>
#faqleft {
  font-family: Righteous;
  font-style: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000000;
  margin-top: 60px;
}

#faqright {
  font-family: Righteous;
  font-style: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000000;
  margin-top: 60px;
}
</style>