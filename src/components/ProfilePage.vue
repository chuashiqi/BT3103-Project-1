<template>
    <div>
        <Header />
        <div id="profileInfo">
        <img width="150" height="130" class="center" src="../assets/profilepic.png"> 
        <h2> {{name}} </h2>
        </div>
        <br>
        <br>

        <div class="row" id="preview">
            <div class="column" id="recyclingHist">
                <span style="display:inline-block; width: 10%;"></span>
                <router-link to = "/recyclingHistory" exact>Your Recycling History</router-link>
                <br>
                <br>
                <div class="chart-container">
                    <lineChart :chart-data="chartdata" options="options" ref = "chart"></lineChart>
                </div>
            </div>
                
            <div class="column" id="benefits">
                <router-link to = "/benefitHistory" exact>Your Benefits</router-link>
                <br>
                <br>
                <div class = "circles">
                    <div class = "stats">
                        {{availablePoints}} points <br>
                        ${{vouchers}} voucher
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import firebase from "../firebase.js"
import lineChart from './lineChart.js'


export default {
    data() {
        return {
            name: "",
            enddate: new Date(),
            startdate: new Date((new Date()).getFullYear(), (new Date()).getMonth() - 1, 1),
            availablePoints: 0,
            bottlesRecycled: 0,
            vouchers: 0,
            months: [],
            amount: [],
            user: [],
            hist: [], 
            points: [],
            chartdata: {
                labels:[],
                datasets: [
                    {
                    label: 'Points obtained per day',
                    data:[],
                    borderColor: ["#5CAFAA"]
                    }
                ]
            },
            options: {
                responsive: true, 
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                    }]
                }
            },
        };
    },

    methods: {
        fetchPoints: function() {
            var email = firebase.auth.currentUser.email
            firebase.database.collection("users").get().then(snapshot => {
                let user = {}
                snapshot.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                    if (user.email === email) {
                        this.name = user.username;
                        this.user.push(user)
                        this.availablePoints = user.availablePoints
                        this.bottlesRecycled = user.bottlesRecycled
                    }
                })
            });
        },
        //fetch points collection from database
        fetchhist: function() {
            var email = firebase.auth.currentUser.email
            var query = firebase.database.collection("users").where("email", "==", email)
            query.get().then((querySnapshot) => 
                querySnapshot.forEach((document) => {
                    document.ref.collection("points").orderBy("date", "desc").get().then((querySnapshot) => {
                        let point = {}
                        querySnapshot.forEach(doc => {
                            point = doc.data()
                            point.id = doc.id
                            this.points.push(point)
                        })
                    });
                })
            )
        },
        fetchvouchers: function() {
            var email = firebase.auth.currentUser.email
            var query = firebase.database.collection("users").where("email", "==", email)
            query.get().then((querySnapshot) => 
                querySnapshot.forEach((document) => {
                    document.ref.collection("vouchers").get().then((querySnapshot) => {
                        let voucher = {}
                        querySnapshot.forEach(doc => {
                            voucher = doc.data()
                            voucher.id = doc.id
                            if (voucher.status == "unused"){
                                this.vouchers += voucher.value
                            }
                        })
                    });
                })
            )
        },

        //filter points collection based on date range provided
        filterdates: function() {
            var start = new Date(Date.parse(this.startdate))
            var end = new Date(Date.parse(this.enddate))
            if (this.hist !== []) {
                this.hist.length = 0
            }
            for (var pt of this.points) {
                var date = pt.date.toDate()
                if (date.getTime() <= end.getTime() && date.getTime() >= start.getTime() && pt.description !== "Quiz") {
                    this.hist.push(pt)
                }
            }
        }, 
        //make arrays for chart plotting
        plotchart: function() {
            var start = new Date(Date.parse(this.startdate))
            var end = new Date(Date.parse(this.enddate))
            if (this.chartdata.labels != []) {
                this.chartdata.labels.length = 0
                this.chartdata.datasets[0].data.length = 0
            }
            for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
                var date = new Date(d);
                date.setHours(0, 0, 0, 0);
                this.chartdata.labels.push(date.toDateString())

                var count = 0
                for (var item of this.hist) {
                    var itemDate = item.date.toDate();
                    itemDate.setHours(0, 0, 0, 0)
                    if (itemDate.valueOf() === date.valueOf()) {
                        count +=1
                    }
                }
                this.chartdata.datasets[0].data.push(10 * count)
            }
        },
    },
    components: {
        Header,
        lineChart
    },

    created() {
        this.fetchPoints();
        this.fetchhist()
        this.fetchvouchers();
        this.filterdates();
        this.plotchart();
        this.$refs.chart.renderLineChart();
    }, 
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

h2 {
    font-family: Righteous;
    font-size: 30px;
    margin-left: 2%;
}

#preview {
    font-family: Righteous;
    font-size: 20px;
}

.center {
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
.column {
  float: left;
  width: 48%;
  padding: 10px;
  height: 300px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.chart-container {
  margin: auto;
  height: 20vh;
  width: 30vw;
  border: 2px solid black;
  padding: 50px
}

#profileInfo {
    text-align:center;
}

.circles {
  display: flex;
  border: 2px solid black;
  padding: 50px
}

.stats {
    background: #5CAFAA;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    text-align: center;
    margin: 5px 20px;
    font-size: 35px;
    padding: 15px;
    display: flex;
    height: 180px;
    width: 180px;
    color: black;
    margin-left: auto;
    margin-right: auto;
    line-height: 50px;
}
a:visited, a:link, a:active {
    text-decoration: none;
    color: black
}

a:hover {
    color: #5CAFAA;
}
</style>