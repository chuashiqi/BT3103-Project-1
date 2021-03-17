<template>
    <div class="head">
        <router-link to = "/" exact>Home</router-link>
        <router-link to = "/locator" exact>Locator</router-link>
        <router-link to = "/" exact>Information</router-link>
        <router-link to = "/rewardsPage" exact>Rewards</router-link>
        <router-link to = "/" exact>Quiz</router-link>
        <router-link to = "/BottleInput" exact>Bottle Input</router-link>
        <div class="header-right">
            <router-link to = "/" exact>My Account</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'header',
  components: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Righteous');

/* Style the header with a grey background and some padding */
.head {
  overflow: hidden;
  background-color: #5CAFAA;
  padding: 20px 10px;
}

/* Style the header links */
.head a {
  float: left;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

/* Change the background color on mouse-over */
.header a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.header a.active {
  background-color: dodgerblue;
  color: white;
}

/* Float the link section to the right */
.header-right {
  float: right;
}
</style>
