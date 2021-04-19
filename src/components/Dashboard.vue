<template>
    <div id="container">
        <div class="head">
            <h1> RecyclEasy Dashboard </h1>
        </div>

        <div class="row">
        <div id="intro" style="display: inline-block; width: 90%">
        <p> This dashboard showcases some key user statistics to identify and understand some recycling trends among the RecyclEasy users. 
        Beyond user trends, the impact of the users' combined recycling efforts can also be visualizes.
        </p>
        </div>
        <div class="row">
        <div id="line-chart" style="display: inline-block;">
            <lineChart3></lineChart3>
        </div>
        <div id="bar-chart" style="display: inline-block;">
            <barChart></barChart>
        </div>
        
        <table>
            <tr>
                <th>The first linechart shows the total number of bottles recycled daily during a one week period. 
                <th>The bar chart on the left segments the monthly total bottles recycled into various regions in 
                Singapore. </th>
            </tr>
            <tr>
                <td>Here, we see that RecyclEasy users generally recycle more bottles on weekends.
                In this way, RecyclEasy or various recycling firms can plan the days for collecting the recycled 
                bottles from the machines at NTUC.</td>
                <td>Here, we see that the users in the north region seems to recycle the most. This will help
                RecyclEasy make better decision about where resources (such as the machines) can be located to
                increase convenience of recycling.</td>
            </tr>
        </table>
        <br>

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

        <table>
            <tr>
                <th>This piechart shows the distribution of brands among the recycled bottles collected.</th>
                <th>chart?</th>
                <th>This linechart showcases the total reward redemptions by the users on a monthly basis.</th>
            </tr>
            <tr>
                <td>Here, we see that Yeos bottles are most common among those recycled. This can help the brands
                or NTUC make decisions regarding their recycling programs or promotions.</td>
                <td>chart?</td>
                <td>Here, we see an increasing trend of reward redemptions which means that users are doing
                well in accumulating points from their recycling, which shows that this method of 
                incentivising recycling is beneficial.</td>
            </tr>
        </table>
    </div> 
    </div>
</template>

<script>
<<<<<<< HEAD
import lineChart from './lineChart3.js'
=======
import lineChart3 from './lineChart3.js'
>>>>>>> 053b736194efcb99a6a596ef409ce6dc677816db
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
        lineChart3,
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

.head {
  font-family: Righteous;
  overflow: hidden;
  background-color: #5CAFAA;
  padding: 20px 10px;
  text-align: center;
}

table, th, td {
    font-family: Righteous;
    border: 1px solid black;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color:#9FF1DC;
}

#intro {
    font-family: Righteous;
    font-size: 15px;
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