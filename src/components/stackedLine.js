import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    mounted () {
        this.renderLineChart();
    },
    methods: {
        renderLineChart: function(){
            this.renderChart(this.datacollection, this.options);
        }
    },
    data: function () {
        return {
            datacollection: {
                labels: ["January", "February", "March", "April"],
                datasets: [
                    {
                        label: 'No Recycling',
                        data: [100, 101, 100,103],
                        fillColor: "#D36582",
                        borderColor: ["#D36582"],
                    },
                    {
                        label: 'Recycling',
                        data: [100, 95, 80, 76],
                        borderColor: ["#5CAFAA"],
                        backgroundColor: "#9DE9D9",
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
}