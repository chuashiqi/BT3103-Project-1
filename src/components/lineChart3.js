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
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [
                    {
                    label: 'Total Bottles Recycled Daily',
                    data: [61, 48, 42, 51, 47, 56, 58],
                    borderColor: ["#5CAFAA"],
                    fill: false,
                    }
                ],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }], 
                    xAxes: [{
                       ticks:  {
                           autoSkip: false,
                       }
                    }],
                },
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
}
