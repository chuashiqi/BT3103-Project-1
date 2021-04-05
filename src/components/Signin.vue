<template>
    <div id="container">
        <div id = "left">
            <img src = "https://i.imgur.com/9CUCF8A.png">
        </div>
        <p id="signUp">Sign In</p>
        <!--p id="username">Username</p><br><br>
        <input type="text" name="username" placeholder="Your username" id="usInput" v-model="username"/-->
        <p id="email">Email</p><br><br>
        <input type="text" name="email" placeholder="Your email" id="emailInput" v-model="email"/>
        <p id="password">Password</p><br><br>
        <input type="password" name="password" placeholder="Your password" id="passwordInput" v-model="password"/>
        <button type="submit" id="signinbutton" v-on:click="checkData"> Sign In </button>
        <router-link to = "/forgotPassword" exact><p id="forgotPw">Forgot Password?</p></router-link>
        <router-link to = "/signup" exact><p id="dontHaveAccount">Don't have an account?</p></router-link>
    </div>
</template>

<script>
import firebase from "../firebase.js"

export default {
    data() {
        return {
            username: "",
            password: "",
            email: "",
        }
    },
    methods: {
        checkData: function() {
            if (this.email === "" && this.password === "") {
                alert("Invalid email / password. Please try again.")
            } else {
                firebase.auth.signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push({ name: 'Slider'})
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    alert(errorMessage)
                });
            }
        }, 
        resetPassword: function() {
            this.$router.push("forgotPassword")
        }
        
    }
}
</script>

<style scoped>
img {
    width:60%;
    height: 100%;
}

#signUp {
    position: absolute;
    width: 191px;
    height: 185px;
    left: 65%;
    top: 2%;
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
    left: 65%;
    top: 26%;
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
    left: 65%;
    top: 41%;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}

#password {
    position: absolute;
    left: 65%;
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
    left: 65%;
    top: 63%;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}

#resetpw {
    position: absolute;
    left: 85%;
    top: 90%;
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
    left: 79%;
    top: 80%;
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

#forgotPw {
    position: absolute;
    width: 300px;
    height: 26px;
    left: 83%;
    top: 87%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: right;
    text-decoration-line: underline;
    color: #000000;
}

#dontHaveAccount {
    position: absolute;
    width: 300px;
    height: 26px;
    left: 80.3%;
    top: 92%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: right;
    text-decoration-line: underline;
    color: #000000;
}

</style>