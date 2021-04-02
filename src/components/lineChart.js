import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Line,
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