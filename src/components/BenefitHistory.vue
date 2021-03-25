<template>
<div>
        <Header />
        <p>Choose your period</p>



        <h2>You have gained:</h2>
        <div class = "circles">
            <p> {{availablePoints}} points</p>
        </div>

        <tr>
                <td><button v-on:click =redeem()>Redeem</button></td>
            </tr>

        <table>
            <tr>
                <td>Date</td>
                <td>Recycling Details</td>
                <td>No. of Points</td>
            </tr>
            <tr v-for = "point in points" v-bind:key = "point.index">
                <td> {{point.date.toDate().getDate()}} / {{point.date.toDate().getMonth() + 1}} / {{point.date.toDate().getFullYear()}} </td>
                <td>{{point.description}}</td>
                <td>10</td>
            </tr>
        </table>

    </div>
</template>

<script>
import Header from './Header.vue'
import database from "../firebase.js"

export default {
    methods: {
        redeem: function() {
            this.$router.push("redeemRewards");
        },

        fetchDesc: function() {
            var query = database.collection("users").where("username", "==", this.name)
            query.get().then((querySnapshot) => {
                querySnapshot.forEach((document) => {
                    document.ref.collection("points").get().then((querySnapshot) => {
                        let point = {}
                        querySnapshot.forEach(doc => {
                            point = doc.data()
                            point.id = doc.id
                            this.points.push(point)
                        })
                    });
                });
            });
            this.points.sort(function(a,b){
                return b.date - a.date;
            });
        },
    },
    
    components: {
        Header
    }, 
};
    </script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');
h2 {
    font-family: Righteous;
    font-size: 40px;
}
table {
    margin-left: auto;
    margin-right: auto;
}
.circles {
  display: flex;
}
p {
    background: #5CAFAA;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    text-align: center;
    margin: 5px 20px;
    font-size: 60px;
    padding: 15px;
    display: flex;
    height: 180px;
    width: 180px;
    color: black;
    margin-left: auto;
    margin-right: auto;
    line-height: 50px;
}
button {
    font-family: Righteous;
    border: 2px solid #5CAFAA ;
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
}
</style>