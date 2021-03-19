<template>
    <div>
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
import database from "../firebase.js"

export default {
    name: "RedeemSuccess",
    data() {
        return {
            name: "clement", // passed from props
            // all retrieved from database
            availablePoints: 0, 
            vouchers: [],
            user: []
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
            var query = database.collection("users").where("username", "==", this.name)
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
        },
    },
    components: {
        Header
    }, 
    created() {
        // retrieve data from database
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
</style>