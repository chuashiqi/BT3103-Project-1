import { Scatter } from 'vue-chartjs'

export default {
  extends: Scatter,
  mounted () {
    this.renderChart({
      datasets: [{
        label: "Percentage of Recycling to Daily Temperature",
        fill: false,
        borderColor: '#f87979',
        backgroundColor: '#f87979',
        showLine: false,
        data: [{
          x: 9,
          y: 33.2
        }, {
          x: 7,
          y: 33.5
        }, {
          x: 11,
          y: 32.3
        }, {
          x: 12,
          y: 31.3
        }, {
          x: 10.1,
          y: 31.8
        }, {
          x: 11.1,
          y: 32.1
        }, {
          x: 8.5,
          y: 33
        }, {
          x:7,
          y: 32
        }, {
          x: 9,
          y: 31.9
        }, {
          x: 8,
          y: 32.2
        }]
      }]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
