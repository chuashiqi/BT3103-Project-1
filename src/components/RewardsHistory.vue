<template>
    <div>
        <Header />
        <h2>Reward History</h2>

        <table>
            <tr>
                <td>Date</td>
                <td>Voucher Value ($)</td>
                <td>Voucher Status</td>
            </tr>
            <tr v-for = "voucher in vouchers" v-bind:key = "voucher.index">
                <td> {{voucher.date.toDate().getDate()}} / {{voucher.date.toDate().getMonth() + 1}} / {{voucher.date.toDate().getFullYear()}} </td>
                <td>{{voucher.value}}</td>
                <td>{{voucher.status}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
import Header from './Header.vue'
import database from "../firebase.js"

export default {
    name: "RewardHistory",
    data() {
        return {
            name: "clement", //passed down as props
            // all retrieved from database
            vouchers: []
        };
    },
    methods: {
        fetchVouchers: function() {
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
            this.vouchers.sort(function(a,b){
                return b.date - a.date;
            });
        },

    },
    components: {
        Header
    }, 
    created() {
        // retrive data from database
        this.fetchVouchers();
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

h2 {
    font-family: Righteous;
    font-size: 30px;
    text-align: left;
    padding: 30px;
}

table {
    padding: 30px;
}

td {
    padding: 2px;
    padding-left: 10px;
    scroll-padding-right: 10px;
}
</style>