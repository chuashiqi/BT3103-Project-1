import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Pie,
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
        this.renderLineChart();
    },
    methods: {
        renderLineChart: function(){
            this.renderChart(this.chartData, this.options);
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