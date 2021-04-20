<template>
    <div id="container">
        <div id="head">
            <img width="70" height="70" align="left" src="../assets/dashboard.png"> 
            <img width="190" height="80" align="right" src="../assets/applogo.jpg"> 
            <h1> RecyclEasy Dashboard </h1>
            
        </div>

        <div class="row">
        <div id="intro" style="display: inline-block; width: 100%">
        <p> This dashboard showcases some key user statistics to identify and understand some recycling trends among the RecyclEasy users. 
        </p>
        <p>Beyond user trends, the impact of the users' combined recycling efforts can also be visualized.
        </p>
        </div>

        <table>
            <tr>
                <th>Total number of bottles recycled daily during a one week period</th>
                <th>Monthly total bottles recycled by Region</th>
            </tr>
        </table>

        <div class="row">
        <div id="line-chart" style="display: inline-block;">
            <lineChart></lineChart>
        </div>
        <div id="bar-chart" style="display: inline-block;">
            <barChart></barChart>
        </div>
        
        <table>
            <tr>
                <th>Distribution of Brands among the recycled bottles</th>
                <th>Impact of Recycling on CO2 emissions (in ppm)</th>
                <th>Total reward redemptions by the users on a monthly basis</th>
            </tr>
        </table>

        <div>
        <div id="pie-chart" style="display: inline-block;">
            <DoughnutChart :chart-data="pieChartData"></DoughnutChart>
        </div>
        <div id="scatter-chart" style="display: inline-block;">
            <StackedLine></StackedLine>
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
import lineChart from './lineChart3.js'
import lineChart2 from './lineChart2.js'
import barChart from './barChart.js'
/*import scatterChart from './scatterChart.js'*/
import DoughnutChart from './doughnutChart.js'
import StackedLine from './stackedLine.js'
export default {
    data() {
        return {
            pieChartData: {
                labels: ["Pokka", "Yeo's", "Meiji", "F&N", "Others"],
                datasets: [
                    {
                        label: "Plastic Brand Distribution",
                        data: [20, 45, 25, 20, 5],
                        backgroundColor: [
                            '#9FF1DC',
                            '#9FE8F1',
                            '#9FC1F1',
                            '#9FD6F1',
                            '#28858C',
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
        /*scatterChart,*/
        DoughnutChart,
        StackedLine
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

#head {
  font-family: Righteous;
  overflow: hidden;
  padding: 0px 15px;
  text-align: left;
}

table, th, tr {
    table-layout: fixed;
    font-family: Righteous;
    color:white;
    border: 1px solid black;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    /* background-color:#9FF1DC; */
    background-color: #205054;
    width:100%;
    font-size:15px;
}

#intro {
    font-family: Righteous;
    font-size: 16px;
    vertical-align: top;
    text-align: center;
}

#line-chart {
    position: relative;
    align-items: center;
    align-self: center;
    /* top: 10%;
    left: 11%;  */
    height:40%; 
    width:40%;
    margin-left: 100px;
}

#bar-chart {
    position: relative;
    /* top: 10%;
    left: 30%; */
    align-items: center;
    align-self: center;
    height:40%; 
    width:40%;
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