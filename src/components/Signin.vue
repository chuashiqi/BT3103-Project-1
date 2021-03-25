<template>
    <div id="container">
        <p id="signUp">Sign In</p>
        <p id="username">Username</p>
        <input type="text" name="username" placeholder="Your username" id="usInput" v-model="username"/>
        <p id="password">Password</p>
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
                            alert("Wrong Password")
                        }
                    }
                })
                if (found == false) {
                    alert("Not Registed")
                }
            })
        }
    }
}
</script>

<style scoped>
#container {
    background: url("file:///Users/clementharsoyo/Desktop/Screen%20Shot%202021-03-23%20at%2021.10.20.png");
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
    width: 264px;
    height: 50px;
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
    width: 282px;
    height: 98px;
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