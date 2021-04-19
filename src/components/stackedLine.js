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
                        data: [100, 120, 95, 110],
                        borderColor: ["#D36582"],
                    },
                    {
                        label: 'Recycling',
                        data: [80, 100, 85, 90],
                        borderColor: ["#5CAFAA"],
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