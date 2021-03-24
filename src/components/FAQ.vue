<template>
<div>
    <Header />
    <div id='faq'>
        <h2>FAQ</h2>
    </div>

    <div id='faqleft'>
        <p> {{q1}} </p>
        <p> {{ans1}} </p>
        <p>
            <img src="https://www.ats-tanner.com/Marketing/News/image-thumb__6950__contentImage/Recycling-Codes.png">
        </p>
        <p>Still Confused? <span v-on:click = "bottleInput">Check here!</span></p>
    </div>

    <div id='faqright'>
        <br>
        <p> {{q2}} </p>
        <p><span v-on:click = "locator" >Click here</span> to find recycling points near you! </p>

        <br>
        <p> {{q3}} </p>
        <p> {{ans3}} </p>

        <br>
        <p> {{q4}} </p>
        <p> {{ans4}} </p>
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
            ans4:"Kindly dispose of the bottles responsibly in a regular trash recepticle."

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
    width: 50%;
    float: left;
    text-align: left;
}

#faqright {
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