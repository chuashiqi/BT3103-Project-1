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
        <div id="pie-chartMini" style="display: inline-blockl;">
            <pieChart></pieChart>
        </div>
        </div>
        <div class="row">
        <div id="line-chart" style="display: inline-block;">
            <lineChart></lineChart>
        </div>
        <div id="bar-chart" style="display: inline-block;">
            <barChart></barChart>
        </div>
        <div>
        <div id="pie-chart" style="display: inline-block;">
            <DoughnutChart :chart-data="pieChartData"></DoughnutChart>
        </div>
        <div id="scatter-chart" style="display: inline-block;">
            <scatterChart></scatterChart>
        </div>
        <div id="line-chart2" style="display: inline-block;">
            <lineChart2></lineChart2>
        </div>
        </div>
        </div>
    </div> 
    </div>
</template>

<script>
import lineChart from './lineChart.js'
import lineChart2 from './lineChart2.js'
import barChart from './barChart.js'
import scatterChart from './scatterChart.js'
import DoughnutChart from './doughnutChart.js'
import PieChart from './pieChart.js'
export default {
    data() {
        return {
            pieChartData: {
                labels: ["Pokka", "Yeo's", "Meiji", "F&N", "Others"],
                datasets: [
                    {
                        label: "Plastic Brand Distribution",
                        data: [20, 30, 25, 20, 5],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(193, 67, 75)',
                            'rgb(123, 37, 175)',
                            ],
                    },
                ]
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
        lineChart2,
        barChart,
        scatterChart,
        DoughnutChart,
        PieChart
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

#pie-chartMini {
    position: relative;
    float: left;
    /* top: 10%;
    left: 11%;  */
    height:15%; 
    width:15%;
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