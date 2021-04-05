<template>
    <div id="container">
        <div id = "left">
            <img src = "https://i.imgur.com/9CUCF8A.png">
        </div>
        <p id="signUp">Reset Password</p>
        <p id="email">Email</p><br><br>
        <input type="text" name="email" placeholder="Your email" id="emailInput" v-model="email"/>
        <button type="submit" id="signinbutton" v-on:click="resetPassword"> Send Email </button>
    </div>
</template>

<script>
import firebase from "../firebase.js"

export default {
    data() {
        return {
            email: "",
        }
    },
    methods: {
        resetPassword: function() {
            firebase.auth.sendPasswordResetEmail(this.email).then(function() {
                alert("Please check your email to reset your password.")
                location.href = "./";
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

#email {
    position: absolute;
    left: 62%;
    top: 35%;
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
    top: 50%;
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

#resetpw {
    position: absolute;
    left: 80%;
    top: 94%;
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 45px;
    display: flex;
    align-items: center;
    color: #000000;
    text-decoration: underline;
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