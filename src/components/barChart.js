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
                    backgroundColor: ["#D36582", "#D36582", "#D36582", "#D36582"]
                    },
                    {
                    label: 'South-East',
                    data:[96, 106, 109, 120],
                    backgroundColor: ["#2F2963", "#2F2963", "#2F2963", "#2F2963"]
                    },
                    {
                    label: 'North',
                    data:[125, 110, 140, 130],
                    backgroundColor: ["#70877F", "#70877F", "#70877F", "#70877F"]
                    },
                    {
                    label: 'North-East',
                    data:[98, 105, 99, 88],
                    backgroundColor: ["#5CAFAA", "#5CAFAA", "#5CAFAA", "#5CAFAA"]
                    },
                    {
                    label: 'Central',
                    data:[121, 96, 121, 115],
                    backgroundColor: ["#EF946C", "#EF946C", "#EF946C", "#EF946C"]
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