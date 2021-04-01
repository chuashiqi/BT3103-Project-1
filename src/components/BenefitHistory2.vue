<template>
<div>
        <Header /> <br> <br>
        <p>Choose your period</p>
        <input type="date" id="start" value="2020-07-22" min="2020-01-01" max="2022-12-31" v-model = "startdate">
        <p style="display:inline"> - </p>
        <input type="date" id="end" value="2020-07-22" min="2020-01-01" max="2022-12-31" v-model = "enddate"><br>

        <div v-show = "show">

            <h2>{{name}}, you have</h2>
            <h2> {{availablePoints}} points</h2>
            <button v-on:click =redeem()>Redeem</button> <br> <br>

            <table>
                <tr id  = "labels">
                    <td>Date</td>
                    <td>Recycling Details</td>
                    <td>No. of Points</td>
                </tr>
                <tr v-for = "point in chosen" v-bind:key = "point.index">
                    <td> {{point.date.toDate().getDate()}} / {{point.date.toDate().getMonth() + 1}} / {{point.date.toDate().getFullYear()}} </td>
                    <td>{{point.description}}</td>
                    <td> {{point.amount}}</td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script>
import Header from './Header.vue'
import firebase from "../firebase.js"

export default {
    name: "Benefit History", 
    data () {
        return  {
            points: [],
            user: [],
            availablePoints: 0,
            values: [],
            startdate: new Date(),
            enddate: new Date(),
            chosen: [],
            show: false,
            name: "",  // passed as props
        }
    },
    methods: {
        redeem: function() {
            this.$router.push("redeemRewards");
        },

        fetchDesc: function() {
            var email = firebase.auth.currentUser.email
            var query = firebase.database.collection("users").where("email", "==", email)
            query.get().then((querySnapshot) => 
                querySnapshot.forEach((document) => {
                    document.ref.collection("points").orderBy("date", "desc").get().then((querySnapshot) => {
                        let point = {}
                        querySnapshot.forEach(doc => {
                            point = doc.data()
                            point.id = doc.id
                            this.points.push(point)
                        })
                    });
                })
            )
        },

        fetchPoints: function() {
            var email = firebase.auth.currentUser.email
            firebase.database.collection("users").get().then(snapshot => {
                let user = {}
                snapshot.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                    this.name = user.username
                    if (user.email === email) {
                        this.user.push(user)
                        this.availablePoints = user.availablePoints
                    }
                })
            });
        },
        handleChange (values) {
            this.values = values
        }
    },
    
    components: {
        Header, 
    }, 

    created() {
        this.fetchPoints();
        this.fetchDesc();
    }, 

    watch: {
        
        startdate: function() {
            this.show = true
            var start = new Date(Date.parse(this.startdate))
            var end = new Date(Date.parse(this.enddate))
            if (this.chosen !== []) {
                this.chosen.length = 0
            }
            console.log(this.points)
            for (var pt of this.points) {
                console.log(pt)
                var date = pt.date.toDate()
                if (date.getTime() <= end.getTime() && date.getTime() >= start.getTime()) {
                    this.chosen.push(pt)
                    console.log("psuhed")
                }
            }
        }, 
        
        enddate: function() {
            this.show = true
            var start = new Date(Date.parse(this.startdate))
            var end = new Date(Date.parse(this.enddate))
            if (this.chosen !== []) {
                this.chosen.length = 0
            }
            for (var pt of this.points) {
                var date = pt.date.toDate()
                if (date.getTime() <= end.getTime() && date.getTime() >= start.getTime()) {
                    this.chosen.push(pt)
                }
            }
        }
    }
};
    </script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');
h2 {
    font-family: Righteous;
    font-size: 20px;
}
table {
    margin-left: auto;
    margin-right: auto;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
}

td {
    padding: 10px;
    padding-left: 15px;
    scroll-padding-right: 10px;
    border-bottom: 1px solid #ddd;
}

#labels {
    font-family: Righteous;
}

div {
    font-family: Righteous;
    text-align: center;
}

button {
    font-family: Righteous;
    border: 2px solid #5CAFAA ;
    background-color: #5CAFAA;
    color: black;
    padding: 10px 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 8px;
}

</style>