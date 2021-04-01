<template>
    <div>
        <Header />
        <h2>{{name}}, you have</h2>
        <div class = "circles">
            <p> {{availablePoints}} points</p>
        </div>

        <table>
            <tr>
                <td><img :src= "fairpriceLogo" /></td>
                <td><img :src= "fairpriceLogo" /></td>
                <td><img :src= "fairpriceLogo" /></td>
                <td><img :src= "fairpriceLogo" /></td>
            </tr>
            <tr>
                <td class = "val">$1 Voucher</td>
                <td class = "val">$3 Voucher</td>
                <td class = "val">$5 Voucher</td>
                <td class = "val">$10 Voucher</td>
            </tr>
            <tr>
                <td><button v-on:click = "redeem200">Redeem 200 Points</button></td>
                <td><button v-on:click = "redeem500">Redeem 500 Points</button></td>
                <td><button v-on:click = "redeem800">Redeem 800 Points</button></td>
                <td><button v-on:click = "redeem1500">Redeem 1500 Points</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import Header from './Header.vue'
import firebase from "../firebase.js"

export default {
    name: "RedeemRewards",
    data() {
        return {
            fairpriceLogo: "https://i.imgur.com/njVyCSM.png",
            voucher: {
                value: 0, 
                date: new Date(), 
                status: "unused"
            },
            // all retrived from database
            availablePoints: 0,
            //vouchers: [], 
            user: [],
            name: "", //passed from props
        };
    },
    methods: {
        redeem200: function() {
            if (this.availablePoints < 200) {
                alert("You have insufficient points.");
            } else {
                this.availablePoints -= 200;
                this.voucher.value = 1;
                //this.vouchers.push(this.voucher);
                this.updateVouchers(); // push vouchers array back to database
                this.updateAvailPoints();
                this.$router.push({name: "redeemSuccess", params: {voucherValue: this.voucher.value}});
            }
        },
        redeem500: function() {
            if (this.availablePoints < 500) {
                alert("You have insufficient points.");
            } else {
                this.availablePoints -= 500;
                this.voucher.value = 3;
                //this.vouchers.push(this.voucher);
                this.updateVouchers(); // push vouchers array back to database
                this.updateAvailPoints();
                this.$router.push({name: "redeemSuccess", params: {voucherValue: this.voucher.value}});
            }
        }, 
        redeem800: function() {
            if (this.availablePoints < 800) {
                alert("You have insufficient points.");
            } else {
                this.availablePoints -= 800;
                this.voucher.value = 5;
                //this.vouchers.push(this.voucher);
                this.updateVouchers(); // push vouchers array back to database
                this.updateAvailPoints();
                this.$router.push({name: "redeemSuccess", params: {voucherValue: this.voucher.value}});
            }
        }, 
        redeem1500: function() {
            if (this.availablePoints < 1500) {
                alert("You have insufficient points.");
            } else {
                this.availablePoints -= 1500;
                this.voucher.value = 10;
                //this.vouchers.push(this.voucher);
                this.updateVouchers(); // push vouchers array back to database
                this.updateAvailPoints();
                this.$router.push({name: "redeemSuccess", params: {voucherValue: this.voucher.value}});
            }
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
        updateVouchers: function() {
            // add redeemed voucher into database
            firebase.database.collection("users").doc(this.user[0].id).collection("vouchers").add(this.voucher);
        }, 
        updateAvailPoints: function() {
            // update available points in database
            firebase.database.collection("users").doc(this.user[0].id).update({
                "availablePoints": this.availablePoints
            }); 
        }
    },
    components: {
        Header
    }, 
    created() {
        //retrive points avail from database
        this.fetchPoints();
    }
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

td {
    padding: 5px;
}

.val {
    font-size: 25px;
}

img {
    width: 150px;
    padding: 10px;
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

div {
    font-family: Righteous;
    text-align: center;
}
</style>