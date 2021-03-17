<template>
    <div>
        <Header />
        <h2>Congratulations {{name}}!</h2>
        <p>Keep recycling to get even more rewards</p>

        {{availablePoints}} points <br>
        ${{totalVoucherValue()}} voucher

        <p> You just earned ${{this.$route.params.voucherValue}} FairPrice Voucher </p>

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
        totalVoucherValue: function() {
            var total = 0;
            for (var v of this.vouchers) {
                total += Number(v.value);
            }
            return total;
        }
    },
    components: {
        Header
    }, 
    created() {
        // retrieve data from database
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

h2 {
    font-family: Righteous;
    font-size: 30px;
}
</style>