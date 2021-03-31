<template>
    <div id="container">
        <div id = "left">
            <img src = "https://i.imgur.com/xrN5o52.png">
        </div>
        <p id="signUp">Sign Up</p>
        <p id="username">Username</p>
        <input type="text" name="username" placeholder="Your username" id="usInput" v-model="username"/>
        <p id="email">Email</p>
        <input type="text" name="email" placeholder="Your email" id="emailInput" v-model="email"/>
        <p id="password">Password</p>
        <input type="password" name="username" placeholder="Your password" id="passwordInput" v-model="password"/>
        <button type="submit" id="signupbutton" v-on:click="sendData"> Sign Up </button>
    </div>
</template>

<script>
import db from "../firebase.js"
export default {
    data() {
        return {
            username: "",
            email: "",
            password: "",
        }
    },
    methods: {
        sendData: function() {
            //To add some verification here
            /*db.collection("users").get().then(snapshot => {
                snapshot.docs.forEach(user => {
                    if (user.data().username == this.username) {
                        alert("Username used. Please use other username")
                        return
                    }
                })
            })*/
            db.collection("users").doc(this.username).set({
                username: this.username,
                password: this.password,
                email: this.email,
                availablePoints: 0,
                quizCompleted: false
            })
            db.collection("users").doc(this.username).collection("points").add({})
            db.collection("users").doc(this.username).collection("points").add({})
            //To add some validation here
            this.$router.push({ path: '/home' })
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
    top: 0%;
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
    top: 22%;
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
    top: 34%;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}

#email {
    position: absolute;
    left: 62%;
    top: 42%;
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    color: #000000;
}

#emailInput {
    position: absolute;
    width: 376px;
    height: 74px;
    left: 62%;
    top: 54%;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}

#password {
    position: absolute;
    left: 62%;
    top: 60%;
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
    top: 75%;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}

#signupbutton {
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

