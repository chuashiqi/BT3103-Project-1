<template>
    <div>
        <Header />
        <div id="profileInfo">
        <img width="85" height="80" align="left" src="../assets/profilepic.png"> 
        <h2> {{name}} </h2>
        <h3> Current Points: {{availablePoints}} </h3>
        <br>
        <br>
        <p style="text-indent:75px">Choose your period</p>
        <input type="date" id="start" value="2020-07-22" min="2020-01-01" max="2022-12-31" v-model = "startdate">
        <p style="display:inline"> - </p>
        <input type="date" id="end" value="2020-07-22" min="2020-01-01" max="2022-12-31" v-model = "enddate"><br>
        </div>

        <lineChart :styles="chartStyles" :chart-data="chartdata" :options="options" v-if = "entered" ref = "chart"></lineChart>

        <div id="summary">
        <p>In total, you have recycled {{bottlesRecycled}} bottles and saved {{orcaCount()}} orcas.</p>
        <p>Keep recycling to save more!</p>
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
            startdate: new Date(),
            enddate: new Date(),
            name: "",
            availablePoints: 0,
            bottlesRecycled: 0,
            entered: false,
            months: [],
            amount:[],
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
                            beginAtZero:true,
                        }
                    }]
                }
            },
            chartStyles: {
                height: '80px',
                width: '50%',
                position: 'relative',
                float: 'right'
                
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

        orcaCount: function() {
            var orcasSaved = this.bottlesRecycled/5
            return orcasSaved;
        }
    },
    components: {
        Header, 
        lineChart
    }, 
    created() {
        this.fetchPoints();
        this.fetchhist();
    }, 
    watch: {
        startdate: function() {
            if (this.entered === true) {
                this.entered = false;
            }
            this.filterdates();
            this.plotchart();
            this.entered =  true
            this.$refs.chart.renderLineChart();
            
        }, 
        enddate: function() {
            if (this.entered === true) {
                this.entered = false;
            }
            this.filterdates();
            this.plotchart();
            this.entered =  true
            this.$refs.chart.renderLineChart();
        }
    }, 
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

#profileInfo {
    font-family: Righteous;
    text-align:left;
}

#summary {
    font-family: Righteous;
    text-align:left;
    padding-top: 160px;
}

</style>