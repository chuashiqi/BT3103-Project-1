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
                <td>{{voucher.date}}</td>
                <td>{{voucher.value}}</td>
                <td>{{voucher.status}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
import Header from './Header.vue'

export default {
    name: "RedeemSuccess",
    data() {
        return {
            // all retrieved from database
            name: "Clement",
            availablePoints: 0, 
            vouchers: [
                {
                    value: 1,
                    date: new Date(),
                    status: "unused"
                }, 
                {
                    value: 5,
                    date: new Date(),
                    status: "used"
                }
            ], 
        };
    },
    methods: {

    },
    components: {
        Header
    }, 
    created() {
        // retrive data from database
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
</style>