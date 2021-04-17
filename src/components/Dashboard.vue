<template>
    <div id="container">
        <div class="row">
        <div id="intro" style="display: inline-block; width: 90%">
        <h3> Recycling Dashboard </h3>
        <p> This provides recycling dashboard for your information. This page 
            can be used to replace the current profile page, by providing more
            information and dashboard as additional feature. There will be total of 5 boxes,
            one is filled with user information (name, id, points), 4 other are graphs (Amount
            of bottle you recycle daily (top-right), amount of bottle recycled by area,
            plastic waste recycling to temperature scatter plot, heatmaps of recycling progress)
        </p>
        </div>

        </div>
        <div class="row">
        <div id="line-chart" style="display: inline-block;">
            <lineChart :chart-data="chartdata" options="options" ref = "chart"></lineChart>
        </div>
        <div id="bar-chart" style="display: inline-block;">
            <barChart :chart-data="chartdataBar" options="options" ref = "chart"></barChart>
        </div>
        <div>
        <div id="scatter-chart" style="display: inline-block;">
            <scatterChart options="options" ref = "chart"></scatterChart>
        </div>
        <div id="pie-chart" style="display: inline-block;">
            <DoughnutChart :chart-data="pieChartData"></DoughnutChart>
        </div>
        <div id="line-chart2" style="display: inline-block;">
            <lineChart :chart-data="lineChartData2"></lineChart>
        </div>
        </div>
        </div>
    </div> 
</template>

<script>
import lineChart from './lineChart.js'
import barChart from './barChart.js'
import scatterChart from './scatterChart.js'
import pieChart from './pieChart.js'
import DoughnutChart from './doughnutChart.js'
export default {
    data() {
        return {
            chartdata: {
                labels:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [
                    {
                    label: 'Total Bottles Recycled Daily',
                    data:[39, 37, 41, 43, 48, 36, 38],
                    borderColor: ["#5CAFAA"],
                    fill: false,
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
            pieChartData: {
                labels: ["Pokka", "Yeo's", "Ribena", "Meiji", "TOP", "F&N"],
                datasets: [
                    {
                        label: "Plastic Brand Distribution",
                        data: [20, 10, 25, 25, 10, 10],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(193, 67, 75)',
                            'rgb(150, 61, 99)',
                            'rgb(255, 75, 36)',
                            ],
                    },
                ]
            },
            lineChartData2: {
                labels:["January", "February", "March", "April"],
                datasets: [
                    {
                    label: 'Total Reward Redemption in $',
                    data:[273, 289, 292, 310],
                    borderColor: ["#5CAFAA"],
                    fill: false,
                    }
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
                },
                maintainAspectRatio: false,
            },
            
            chartStyles: {
                height: '2px',
                width: '3%',
                float: 'left'
                
            },
        }
    },
    components: {
        lineChart,
        barChart,
        scatterChart,
        pieChart,
        DoughnutChart,
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

#intro {
    font-family: Righteous;
    font-size: 15px;
    vertical-align: top;
}

#line-chart {
    position: relative;
    align-items: center;
    align-self: center;
    /* top: 10%;
    left: 11%;  */
    height:40%; 
    width:35%;
    margin-left: 100px;
}

#bar-chart {
    position: relative;
    /* top: 10%;
    left: 30%; */
    align-items: center;
    align-self: center;
    height:40%; 
    width:35%;
    margin-left: 80px;
}

#scatter-chart {
    position: relative;
    /* float: left;  */
    height:20%; 
    width:33%;
}

#pie-chart {
    position: relative;
    /* float: left;  */
    height:20%; 
    width:33%;
}

#pie-chart2 {
    position: relative;
    /* float: left;  */
    height:20%; 
    width:33%;
}

</style>