<template>
    <div v-if = "state">
        <Header />
        <h2>Rewards History</h2>

        <table>
            <tr>
                <td>Date</td>
                <td>Voucher Value ($)</td>
                <td>Voucher Code</td>
                <td>Voucher Status</td>
            </tr>
            <tr v-for = "voucher in vouchers" v-bind:key = "voucher.index">
                <td> {{voucher.date.toDate().getDate()}} / {{voucher.date.toDate().getMonth() + 1}} / {{voucher.date.toDate().getFullYear()}} </td>
                <td>{{voucher.value}}</td>
                <td>{{voucher.id}}</td>
                <td>{{voucher.status}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
import Header from './Header.vue'
import firebase from "../firebase.js"

export default {
    name: "RewardHistory",
    data() {
        return {
            vouchers: [],
            state: false,
        };
    },
    methods: {
        fetchVouchers: function() {
            var user = firebase.auth.currentUser
            if (user) {
                this.state = true;
                var email = firebase.auth.currentUser.email
                var query = firebase.database.collection("users").where("email", "==", email)
                query.get().then((querySnapshot) => {
                    querySnapshot.forEach((document) => {
                        document.ref.collection("vouchers").orderBy("date", "desc").get().then((querySnapshot) => {
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
    margin-left: 2%;
}

table {
    margin-left: 2%;
}

td {
    padding: 2px;
    padding-left: 10px;
    scroll-padding-right: 10px;
}

div {
    font-family: Righteous;
    text-align: center;
}
</style>