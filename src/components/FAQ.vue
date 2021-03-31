<template>
<div>
    <Header />
    <div id='faqleft'>
        <h2>FAQ</h2>
        <p> {{q1}} </p>
        <p> {{ans1}} </p>
        <p>
            <img src="https://www.ats-tanner.com/Marketing/News/image-thumb__6950__contentImage/Recycling-Codes.png">
        </p>
        <p>Still Confused? <span v-on:click = "bottleInput">Check here!</span></p>
    </div>

    <div id='faqright'>
        <br><br><br>
        <p> {{q2}} </p>
        <p><span v-on:click = "locator" >Click here</span> to find recycling points near you! </p>

        <br>
        <p> {{q3}} </p>
        <p> {{ans3}} </p>

        <br>
        <p> {{q4}} </p>
        <p> {{ans4}} </p>

        <br>
        <p> {{q5}} </p>
        <p> {{ans5}} </p>

    </div>
</div>
</template>

<script>
import Header from './Header.vue'

export default {
    name: "FAQ",
    data() {
        return {
            q1: "1. Can this be recycled?",
            ans1: "Kindly refer to the chart below. We accept bottles of codes 1, 2, and 5!",
            q2:"2. Where can I go to recycle my bottles?",
            q3:"3. How do I prepare my bottles for recycling?",
            ans3:"Rinse and dry your bottles thoroughly before bringing them to one of our bottle collecting stations.",
            q4:"4. What if my bottles are not recyclable?",
            ans4:"Kindly dispose of the bottles responsibly in a regular trash recepticle.",
            q5: "5. How is the dropping of the bottles at the recycling points associated with a specific user account?",
            ans5: "There will be a machine at the recycling point for you to input your username."
        };
    },
    methods: {
        bottleInput: function() {
            this.$router.push("bottleInput")
        },
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

#faqleft {
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #000000;
    width: 50%;
    float: left;
    text-align: left;
    margin-left: 2%;
}

#faqright {
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #000000;
    width: 45%;
    float: right;
    text-align: left;
}

h2 {
    font-family: Righteous;
    font-size: 30px;
    text-align: left;
}

span {
    color: #5CAFAA;
}

img {
    width: 90%
}

</style>
