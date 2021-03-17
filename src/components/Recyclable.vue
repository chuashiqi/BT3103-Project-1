<template>
    <div>
        <Header />
        <img src = "https://i.imgur.com/YU4p4fb.png" alt = "Recyclable">
        <p>This can be recycled! <br>
        Click <span v-on:click = "locator"> here </span> to find recycling points near you!</p>
    </div>
</template>

<script>
import Header from './Header.vue'

export default {
    name: "Recycleble",
    data() {
        return {
        };
    },
    methods: {
        locator: function() {
            this.$router.push("locator")
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

span {
    color: #5CAFAA;
}
</style>