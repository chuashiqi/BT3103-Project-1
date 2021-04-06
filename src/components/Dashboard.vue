<template>
    <div id="container">
        <h3> Recycling Dashboard </h3>
        <p> This provides recycling dashboard for your information. It will
            consist of amount of recycled bottle with each region, in timely manner (bar chart),
            and daily manner (line chart). Other than that, the dashboard will contain
            the amount of plastic waste accumulated each year, and besides, the overall temperature
            on Singapore, to show significance of plastic waste. Lastly, it will provide
            heatmap for visualisation purpose </p>
        <div class="chart-container">
            <lineChart :chart-data="chartdata" options="options" ref = "chart"></lineChart>
        </div>
        <div class="barchart-container">
            <barChart :chart-data="chartdataBar" options="options" ref = "chart"></barChart>
        </div>
        <div class="container">
            <GChart :chart-data="bubbleChartData"></GChart>
        </div>
    </div> 
</template>

<script>
import lineChart from './lineChart.js'
import barChart from './barChart.js'
import { GChart } from "vue-google-charts";
export default {
    data() {
        return {
            chartdata: {
                labels:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [
                    {
                    label: 'Total Bottles Recycled Daily',
                    data:[40, 36, 38, 44, 50, 51, 47],
                    borderColor: ["#5CAFAA"]
                    }
                ]
            },
            chartdataBar: {
                labels:["January", "February", "March", "April"],
                datasets: [
                    {
                    label: 'West',
                    data:[100, 96, 123, 98],
                    backgroundColor: ["#D36582", "#D36582", "#D36582", "#D36582"]
                    },
                    {
                    label: 'South-East',
                    data:[96, 106, 109, 120],
                    backgroundColor: ["#2F2963", "#2F2963", "#2F2963", "#2F2963"]
                    },
                    {
                    label: 'North',
                    data:[103, 93, 140, 130],
                    backgroundColor: ["#70877F", "#70877F", "#70877F", "#70877F"]
                    },
                    {
                    label: 'North-East',
                    data:[98, 105, 99, 88],
                    backgroundColor: ["#5CAFAA", "#5CAFAA", "#5CAFAA", "#5CAFAA"]
                    },
                    {
                    label: 'Central',
                    data:[121, 96, 121, 115],
                    backgroundColor: ["#EF946C", "#EF946C", "#EF946C", "#EF946C"]
                    }
                ]
            },
            bubbleChartData: {
                labels: ["Region", "Recycled Bottle", "Discarded Bottle", "Temperature"],
                datasets: [
                    { data: ["West", 80, 167, 120] },
                    { data: ["East", 79, 136, 130] },
                ]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                }
            },
        }
    },
    components: {
        lineChart,
        barChart,
        GChart,
    },
}
</script>

<style scoped>
.chart-container {
    float: left;
    height: 18vh;
    width: 30vw;
    left: 10%;
    top: 5%;
    padding: 20px;
}

.barchart-container {
    float: left;
    height: 20vh;
    width: 30vw;
    left: 60%;
    top: 3%;
    padding: 10px;
}
</style>