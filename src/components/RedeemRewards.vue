<template>
    <div>
        <Header />
        <h2>{{name}}, you have</h2>
        {{availablePoints}} points

        <table>
            <tr>
                <td><img :src= "fairpriceLogo" /></td>
                <td><img :src= "fairpriceLogo" /></td>
                <td><img :src= "fairpriceLogo" /></td>
                <td><img :src= "fairpriceLogo" /></td>
            </tr>
            <tr>
                <td>$1 Voucher</td>
                <td>$3 Voucher</td>
                <td>$5 Voucher</td>
                <td>$10 Voucher</td>
            </tr>
            <tr>
                <td><button v-on:click = "redeem200">Redeem 200 Points</button></td>
                <td><button v-on:click = "redeem500">Redeem 500 Points</button></td>
                <td><button v-on:click = "redeem800">Redeem 800 Points</button></td>
                <td><button v-on:click = "redeem1500">Redeem 1500 Points</button></td>
            </tr>
        </table>

        {{vouchers}}
        {{this.voucher}}
    </div>
</template>

<script>
import Header from './Header.vue'

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
            availablePoints: 450,
            vouchers: [], 
            name: "Clement", 
        };
    },
    methods: {
        redeem200: function() {
            if (this.availablePoints < 200) {
                alert("You have insufficient points.");
            } else {
                this.availablePoints -= 200;
                this.voucher.value = 1;
                this.vouchers.push(this.voucher);
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
                this.vouchers.push(this.voucher);
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
                this.vouchers.push(this.voucher);
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
                this.vouchers.push(this.voucher);
                this.updateVouchers(); // push vouchers array back to database
                this.updateAvailPoints();
                this.$router.push({name: "redeemSuccess", params: {voucherValue: this.voucher.value}});
            }
        }, 
        updateVouchers: function() {
            // push vouchers array back to database
        }, 
        updateAvailPoints: function() {
            // update available points in database
        }
    },
    components: {
        Header
    }, 
    created() {
        //retrive vouchers & points avail from database
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

h2 {
    font-family: Righteous;
    font-size: 30px;
}

table {
    margin-left: auto;
    margin-right: auto;
}

img {
    width: 150px;
    padding: 10px;
}
</style>