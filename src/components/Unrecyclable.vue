<template>
    <div>
        <Header />
        <img src = "https://i.imgur.com/Zs2byfa.png" alt = "Unrecyclable">
        <p>This cannot be recycled! <br>
        Please dispose of item responsibly.</p>
    </div>
</template>

<script>
import Header from './Header.vue'

export default {
    name: "Unrecycleble",
    data() {
        return {
        };
    },
    methods: {
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

div {
    font-family: Righteous;
    text-align: center;
}
</style>