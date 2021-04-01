<template>
    <div>
        <Header />
        <h2>Hello, {{name}}</h2>
        <p> Check and redeem your exclusive rewards here! </p>
        <button id = "redeemRewards" v-on:click = "redeemRewards">REDEEM REWARDS</button>
        <span> | </span>
        <button id = "rewardHistory" v-on:click = "rewardsHistory">REWARDS HISTORY</button>
    </div>
</template>

<script>
import Header from './Header.vue'
import firebase from "../firebase.js"

export default {
    name: "RewardsPage",
    data() {
        return {
            // name retrieved from database/ as props from signin page?
            name: "", 
            user: []
        };
    },
    methods: {
        redeemRewards: function() {
            this.$router.push("redeemRewards")
        }, 
        rewardsHistory: function() {
            this.$router.push("rewardsHistory")
        }, 
        fetchUser: function() {
            var email = firebase.auth.currentUser.email
            firebase.database.collection("users").get().then(snapshot => {
                let user = {}
                snapshot.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                    if (user.email === email) {
                        this.name = user.username;
                        this.user.push(user)
                    }
                })
            });
        }
    },

    components: {
        Header
    }, 
    created() {
        // retrive data from database
        this.fetchUser();
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

h2 {
    font-family: Righteous;
    font-size: 30px;
}

#redeemRewards {
    font-family: Righteous;
    border: 2px solid black ;
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    padding: 4px;
}

#rewardHistory {
    font-family: Righteous;
    border: 2px solid white ;
    background-color: black;
    color: white;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    padding: 5px;
}

span {
    font-size: 20px;
}

div {
    font-family: Righteous;
    text-align: center;
}

</style>