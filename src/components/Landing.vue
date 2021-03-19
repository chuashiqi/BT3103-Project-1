<template>
    <div id="container">
        <p id="bigWords"> RecyclEasy </p>
        <button id="login"><router-link to = "/home" exact id="loginText">Login</router-link></button>
        <button id="signup"><router-link to = "/home" exact id="signUpText">Sign Up</router-link></button>
    </div>
</template>

<script>
export default {
    name: "Landing",
}
</script>

<style scoped>
#container {
    position: relative;
    width: 1440px;
    height: 900px;
}
/* Styling for the RecyclEasy */
#bigWords {
    position: absolute;
    width: 799px;
    height: 192px;
    left: 10%;
    top: 10%;
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 130px;
    line-height: 161px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000; 
}

/* Styling for login */
#login {
    position: absolute;
    width: 362px;
    height: 91px;
    left: 10%;
    top: 50%;
    background: #FFFEFD;
}

#loginText {
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 89px;
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: #000000;
}

/* Styling for signup */
#signup {
    position: absolute;
    width: 362px;
    height: 91px;
    left: 38%;
    top: 50%;
    background: #106813;
}

#signUpText {
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 89px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    text-decoration: none;
}
</style>