<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
    extends: Line,
    mixins: [reactiveProp],
    data () {
        return {
            // data: {
            //     labels: ['Blue', 'Red', 'Green', 'Yellow', 'Cyan'],
            //     datasets: [{
            //         fill: false,
            //         borderColor: '#a0bbe8',
            //         pointBackgroundColor: '#a0bbe8',
            //         // pointBorderColor: '#b80300',
            //         pointRadius: 4,
            //         data: [1,2, 4, 0.1, 1.2, 2.7]
            //     }]
            // },
            options: {
                maintainAspectRatio: false,
                responsive: true
            }
        }
    },
    mounted () {
        this.renderChart(this.chartData, this.options)
    }
}
</script>

<style scoped>
</style>