<template>
    <div id="container">
        <p id="signUp">Sign Up</p>
        <div id = "left">
            <img src = "https://i.imgur.com/xrN5o52.png">
        </div>
        <p id="username">Username</p>
        <input type="text" name="username" placeholder="Your username" id="usInput" v-model="username"/>
        <p id="email">Email</p>
        <input type="text" name="email" placeholder="Your email" id="emailInput" v-model="email"/>
        <p id="password">Password</p>
        <input type="password" name="username" placeholder="Your password" id="passwordInput" v-model="password"/>
        <button type="submit" id="signupbutton" v-on:click="sendData"> Sign Up </button>
        <router-link to = "/signin" exact><p id="haveAccount">Have an account?</p></router-link>
    </div>
</template>

<script>
import firebase from "../firebase.js"
export default {
    data() {
        return {
            username: "",
            email: "",
            password: "",
        }
    },
    methods: {
        /*
        sendData: function() {
            //Verification
            db.collection("users").get().then(snapshot => {
                var foundUsername = false
                var foundEmail = false
                snapshot.docs.forEach(user => {
                    if (user.data().username == this.username) {
                        foundUsername = true
                    }
                    if (user.data().email == this.email) {
                        foundEmail = true
                    }
                })
                var goodPassword = this.checkStrength(this.password)
                if (foundUsername == false && foundEmail == false) {
                    if (goodPassword == true) {
                        db.collection("users").doc(this.username).set({
                        username: this.username,
                        password: this.password,
                        email: this.email,
                        availablePoints: 0,
                        quizCompleted: false, 
                        bottlesRecycled: 0,
                        })
                        db.collection("users").doc(this.username).collection("points").add({})
                        db.collection("users").doc(this.username).collection("vouchers").add({})
                        this.$router.push({ path: '/home', params: {username: this.username}})
                    } else {
                        alert("Password Strength Not Good")
                    }
                } else if (foundUsername == true && foundEmail == false){
                    alert("Username used, Please Choose Other")
                } else if (foundUsername == false && foundEmail == true){
                    alert("Email used. Please Choose Other")
                } else {
                    alert("Email Used, Username Used")
                }
            })
        },
        */
        sendData: function() {
            if (this.username === "") {
                alert("Please enter your username.")
            } 
            if (this.email === "") {
                alert("Please enter your email.")
            }
            if (this.password === "") {
                alert("Please enter your password.")
            } else {
                firebase.auth.createUserWithEmailAndPassword(this.email, this.password).then(u => {
                    u.user.sendEmailVerification();
                    firebase.database.collection("users").doc(this.username).set({
                        username: this.username,
                        password: this.password,
                        email: this.email,
                        availablePoints: 0,
                        quizCompleted: false, 
                        bottlesRecycled: 0,
                    })
                    firebase.database.collection("users").doc(this.username).collection("points").add({})
                    firebase.database.collection("users").doc(this.username).collection("vouchers").add({}); 
                    alert("Succesfully signed up. Please verify email before signing in.")
                    setTimeout(function() {
                        location.href = "./";
                    }, 1000);
                }).catch(error => {
                    if (error.code === "auth/invalid-email") {
                        alert("Please enter a valid email.")
                    }
                    if (error.code === "auth/weak-password") {
                        alert("Please enter a stronger password.")
                    }
                    if (error.code === "auth/email-already-in-use") {
                        alert("This email is already in use.")
                    }
                })
            }
        },
        /*
        checkStrength: function(password) {
            var strength = 0;
            if (password.match(/[a-z]+/)) {
                strength += 1;
            }
            if (password.match(/[A-Z]+/)) {
                strength += 1;
            }
            if (password.match(/[0-9]+/)) {
                strength += 1;
            }
            if (password.match(/[$@#&!]+/)) {
                strength += 1;
            }
            if (strength == 4) {
                return true
            } else {
                return false
            }
        }
        */
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
    left: 66%;
    top: -2%;
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
    left: 66%;
    top: 20%;
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
    left: 66%;
    top: 32%;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}

#email {
    position: absolute;
    left: 66%;
    top: 40%;
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
    left: 66%;
    top: 52%;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}

#password {
    position: absolute;
    left: 66%;
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
    left: 66%;
    top: 73%;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}

#signupbutton {
    position: absolute;
    width: 180px;
    height: 39px;
    left: 80%;
    top: 88%;
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

#haveAccount {
    position: absolute;
    width: 300px;
    height: 26px;
    left: 83.5%;
    top: 93%;
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

