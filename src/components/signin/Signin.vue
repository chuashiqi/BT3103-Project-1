<template>
    <div id="container">
        <p id="signUp">Sign In</p>
        <p id="username">Username</p>
        <input type="text" name="username" placeholder="Your username" id="usInput" />
        <p id="password">Password</p>
        <input type="text" name="username" placeholder="Your password" id="passwordInput"/>
    </div>
</template>

<script>
export default {
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
</style>