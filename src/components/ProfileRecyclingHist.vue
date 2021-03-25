<template>
    <div>
        <Header />
        <div id="profileInfo">
        <img width="85" height="80" align="left" src="../assets/profilepic.png"> 
        <h2> {{name}} </h2>
        <h3> Current Points: {{availablePoints}} </h3>
        <br>
        <br>
        <p style="text-indent:75px">Choose your period</p>
        <input type="date" id="start" value="2020-07-22" min="2020-01-01" max="2022-12-31">
        <p style="display:inline"> - </p>
        <input type="date" id="end" value="2020-07-22" min="2020-01-01" max="2022-12-31">
        </div>

    </div>
</template>

<script>
import Header from './Header.vue'
import database from "../firebase.js"
import {Line} from 'vue-chartjs'

export default {
    extends:Line, 
    data() {
        return {
            startdate: new Date(document.getElementById("start").value),
            enddate: new Date(document.getElementById("end").value),
            name: "clement", //passed from props
            availablePoints: 0,
            months: [],
            amount:[],
        };
    },

   
    methods: {
        fetchPoints: function() {
            database.collection("users").get().then(snapshot => {
                let user = {}
                snapshot.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                    if (user.username === this.name) {
                        this.user.push(user)
                        this.availablePoints = user.availablePoints
                    }
                })
            });
        },
        
        /*
        fetchhsist: funtion() {
            database.collection("users").where("username", "==", this.name).get()
            .then(querySnapshot => {
                return querySnapshot.docs[0].ref.collection('points').get();
            })
            .then(snapshot => {
                let history = {}
                snapshot.forEach(doc => {
                    hist = doc.data()
                    hist.id = doc.id
                    if (hist.date>=startdate && hist.date<=enddate) {
                        this.hist.push(hist),
                        this.amount[hist.date.getMonth()] = hist.amount,
                    }
                })
            });
        },
        */

    },
    components: {
        Header
    }, 
    created() {
        this.fetchPoints();
    },
};
</script>

<style>
#profileInfo {
    text-align:left;
}
</style>