import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Pie,
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
                labels: ["West", "East", "North-East", "Central", "South-West"],
                datasets: [
                    {
                        label: "Recycling Region",
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
            }
        }
    },
    watch: {
        chartData: function () {
            this._chart.destroy();
            this.renderLineChart();
        },
        deep: true
    }
}