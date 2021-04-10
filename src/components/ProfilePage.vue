<template>
    <div>
        <Header />
        <div id="profileInfo">
        <img width="150" height="130" class="center" src="../assets/profilepic.png"> 
        <h2> {{name}} </h2>
        </div>
        <br>
        <br>

        <div class="row" id="preview">
            <div class="column" id="recyclingHist">
                <span style="display:inline-block; width: 1%;"></span>
                <router-link to = "/recyclingHistory" exact>Your Recycling History</router-link>
                <br>
                <br>
                <div class = "circles">
                    <div class = "stats">
                        {{bottlesRecycled}} bottles <br> &
                        saved {{orcaCount()}} orcas
                    </div>
                </div>
            </div>
                
            <div class="column" id="benefits">
                <router-link to = "/benefitHistory" exact>Your Benefits</router-link>
                <br>
                <br>
                <div class = "circles">
                    <div class = "stats">
                        {{availablePoints}} points <br>
                        ${{vouchers}} voucher
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import firebase from "../firebase.js"


export default {
    data() {
        return {
            name: "",
            availablePoints: 0,
            bottlesRecycled: 0,
            vouchers: 0,
            months: [],
            amount: [],
            user: [],
            hist: [], 
            points: [],
        };
    },

    methods: {
        fetchPoints: function() {
            var email = firebase.auth.currentUser.email
            firebase.database.collection("users").get().then(snapshot => {
                let user = {}
                snapshot.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                    if (user.email === email) {
                        this.name = user.username;
                        this.user.push(user)
                        this.availablePoints = user.availablePoints
                        this.bottlesRecycled = user.bottlesRecycled
                    }
                })
            });
        },
        fetchvouchers: function() {
            var email = firebase.auth.currentUser.email
            var query = firebase.database.collection("users").where("email", "==", email)
            query.get().then((querySnapshot) => 
                querySnapshot.forEach((document) => {
                    document.ref.collection("vouchers").get().then((querySnapshot) => {
                        let voucher = {}
                        querySnapshot.forEach(doc => {
                            voucher = doc.data()
                            voucher.id = doc.id
                            if (voucher.status == "unused"){
                                this.vouchers += voucher.value
                            }
                        })
                    });
                })
            )
        },
        orcaCount: function() {
            var orcasSaved = this.bottlesRecycled/5
            return orcasSaved;
        }
    
    },
    components: {
        Header,
    },

    created() {
        this.fetchPoints();
        this.fetchvouchers();
    }, 
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

h2 {
    font-family: Righteous;
    font-size: 30px;
    margin-left: 2%;
}

#preview {
    font-family: Righteous;
    font-size: 20px;
    margin-bottom: 5%;
}

.center {
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
.column {
  float: left;
  width: 48%;
  padding: 10px;
  height: 350px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

#profileInfo {
    text-align:center;
}

.circles {
  display: flex;
  padding: 50px;
  border: 2px solid black;
}

.stats {
    background: #5CAFAA;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    text-align: center;
    margin: 5px 20px;
    font-size: 35px;
    padding: 15px;
    display: flex;
    height: 180px;
    width: 180px;
    color: black;
    margin-left: auto;
    margin-right: auto;
    line-height: 50px;
}
a:visited, a:link, a:active {
    text-decoration: none;
    color: black
}

a:hover {
    color: #5CAFAA;
}
</style>