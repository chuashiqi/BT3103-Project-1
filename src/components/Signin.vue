<template>
    <div id="container">
        <div id = "left">
            <img src = "https://i.imgur.com/9CUCF8A.png">
        </div>
        <p id="signUp">Sign In</p>
        <p id="username">Username</p><br><br>
        <input type="text" name="username" placeholder="Your username" id="usInput" v-model="username"/>
        <p id="password">Password</p><br><br>
        <input type="password" name="password" placeholder="Your password" id="passwordInput" v-model="password"/>
        <button type="submit" id="signinbutton" v-on:click="checkData"> Sign In </button>
    </div>
</template>

<script>
import db from "../firebase.js"
export default {
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        checkData: function() {
            db.collection("users").get().then(snapshot => {
                var found = false
                snapshot.docs.forEach(user => {
                    if (user.data().username == this.username) {
                        found = true
                        if (user.data().password == this.password) {
                            this.$router.push({ path: '/home' })
                        } else {
                            alert("Your password is incorrect, please try again.")
                        }
                    }
                })
                if (found == false) {
                    alert("Your account does not exist. Please sign up.")
                }
            })
        }
    }
}
</script>

<style scoped>
img {
    width:50%;
    height: 100%;
}

#signUp {
    position: absolute;
    width: 191px;
    height: 185px;
    left: 62%;
    top: 5%;
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 60px;
    display: flex;
    align-items: center;
    color: #000000;
}

#username {
    position: absolute;
    left: 62%;
    top: 27%;
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    color: #000000;
}

#usInput {
    position: absolute;
    width: 376px;
    height: 74px;
    left: 62%;
    top: 39%;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}

#password {
    position: absolute;
    left: 62%;
    top: 48%;
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    color: #000000;
}

#passwordInput {
    position: absolute;
    width: 376px;
    height: 74px;
    left: 62%;
    top: 63%;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}

#signinbutton {
    position: absolute;
    width: 180px;
    height: 39px;
    left: 77%;
    top: 90%;
    background: rgba(46, 202, 193, 0.69);
    border-radius: 10px;
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;

}
</style>