<template>
    <div>
        <Header />
        <h2>Hello, {{name}}</h2>
        <p> Check and redeem your exclusive rewards here! </p>
        <button v-on:click = "redeemRewards">REDEEM REWARDS</button>
        <button v-on:click = "rewardsHistory">REWARDS HISTORY</button>
    </div>
</template>

<script>
import Header from './Header.vue'

export default {
    name: "RewardsPage",
    data() {
        return {
            // name retrieved from database/ as props from signin page?
            name: "Clement"
        };
    },
    methods: {
        redeemRewards: function() {
            this.$router.push("redeemRewards")
        }, 
        rewardsHistory: function() {
            this.$router.push("rewardsHistory")
        }
    },

    components: {
        Header
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

h2 {
    font-family: Righteous;
    font-size: 30px;
}
</style>