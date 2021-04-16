<template>
    <div v-if = "state">
        <Header />
        <h2>Congratulations {{name}}!</h2>
        <p>Keep recycling to get even more rewards</p>

        <div class = "circles">
            <div class = "stats">
                {{availablePoints}} points <br>
                ${{totalVoucherValue()}} voucher
            </div>
        </div>

        <p> You just earned ${{this.$route.params.voucherValue}} FairPrice Voucher </p>

    </div>
</template>

<script>
import Header from './Header.vue'
import firebase from "../firebase.js"

export default {
    name: "RedeemSuccess",
    data() {
        return {
            name: "", 
            availablePoints: 0, 
            vouchers: [],
            user: [], 
            state: false,
        };
    },
    methods: {
        totalVoucherValue: function() {
            var total = 0;
            for (var v of this.vouchers) {
                if (v.status === "unused") {
                    total += Number(v.value);
                }
            }
            return total;
        }, 
        fetchPointsAndVouchers: function() {
            var user = firebase.auth.currentUser
            if (user) {
                this.state = true;
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
                        }
                    })
                });
                var query = firebase.database.collection("users").where("email", "==", email)
                query.get().then((querySnapshot) => {
                    querySnapshot.forEach((document) => {
                        document.ref.collection("vouchers").get().then((querySnapshot) => {
                            let voucher = {}
                            querySnapshot.forEach(doc => {
                                voucher = doc.data()
                                voucher.id = doc.id
                                this.vouchers.push(voucher)
                            })
                        });
                    });
                });
            } else {
                alert("Please sign in or sign up.")
                this.state = false;
                location.href = "./";
            }
        },
    },
    components: {
        Header
    }, 
    created() {
        this.fetchPointsAndVouchers();
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

h2 {
    font-family: Righteous;
    font-size: 30px;
}

.circles {
  display: flex;
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

div {
    font-family: Righteous;
    text-align: center;
}
</style>