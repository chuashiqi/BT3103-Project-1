import { HorizontalBar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: HorizontalBar,
    mixins: [reactiveProp],
    mounted () {
        this.renderLineChart();
    },
    data: function () {
        return {
            datacollection: {
                labels:["January", "February", "March", "April"],
                datasets: [
                    {
                    label: 'West',
                    data:[100, 96, 123, 98],
                    backgroundColor: ["#9FF1DC", "#9FF1DC", "#9FF1DC", "#9FF1DC"]
                    },
                    {
                    label: 'South-East',
                    data:[96, 106, 109, 120],
                    backgroundColor: ["#9FE8F1", "#9FE8F1", "#9FE8F1", "#9FE8F1"]
                    },
                    {
                    label: 'North',
                    data: [125, 110, 140, 130],
                    backgroundColor: ["#9FC1F1", "#9FC1F1", "#9FC1F1", "#9FC1F1"]
                    },
                    {
                    label: 'North-East',
                    data:[98, 105, 99, 88],
                    backgroundColor: ["#9FD6F1", "#9FD6F1", "#9FD6F1", "#9FD6F1"]
                    },
                    {
                    label: 'Central',
                    data:[121, 96, 121, 115],
                    backgroundColor: ["#28858C", "#28858C", "#28858C", "#28858C"]
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
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
    methods: {
        renderLineChart: function(){
            this.renderChart(this.datacollection, this.options);
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