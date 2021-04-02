<template>
    <div class="head">
        <router-link to = "/home" exact>Home</router-link>
        <router-link to = "/locator" exact>Locator</router-link>
        <router-link to = "/FAQ" exact>FAQ</router-link>
        <router-link to = "/rewardsPage" exact>Rewards</router-link>
        <router-link to = "/quizPage" exact>Quiz</router-link>
        <router-link to = "/benefitHistory" exact>Benefit History</router-link>
        <div class="header-right">
            <router-link to = "/profile" exact>My Account</router-link>
            <router-link @click.native="remove" to = "/" exact>Logout</router-link>
        </div>
    </div>
</template>

<script>
import firebase from "../firebase.js"
export default {
  name: 'header',
  components: {

  }, 
  methods: {
      remove: function() {
        firebase.auth.signOut().then(() => {
            // Sign-out successful.
            //alert("signout")
        }).catch((error) => {
            // An error happened.
            alert(error.message)
        });
      }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Righteous');

.head {
  font-family: Righteous;
  overflow: hidden;
  background-color: #5CAFAA;
  padding: 20px 10px;
}

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

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}
</style>
