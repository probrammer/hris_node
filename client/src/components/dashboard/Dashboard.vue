<template>
    <main-app>
        <slot>
            <v-container fluid>
                <!-- cards -->
                <dashboard-cards :cardData="cardData"></dashboard-cards>

                <!-- filter -->
                <dashboard-filter 
                    @set-year="filter.year = $event" 
                    @set-month="filter.month = $event"
                    @export-report="exportReport()">
                </dashboard-filter>

                <!-- charts -->
                <v-row>
                    <!-- headcount chart -->
                    <v-col md="6">
                        <v-card
                            class="pa-2">
                            <h3 class="text-md-body-1">Headcount Report</h3>
                            <line-chart :chart-data="headCountData"></line-chart>
                        </v-card>
                    </v-col>

                    <!-- attrition chart -->
                    <v-col md="6">
                        <v-card
                            class="pa-2">
                            <h3 class="text-md-body-1">Attrition Report</h3>
                            <line-chart :chart-data="attritionData"></line-chart>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </slot>
    </main-app>
</template>

<script>
// comps
import MainApp from '../layouts/MainApp'
import LineChart from './LineChart'
import DashboardCards from './DashboardCards'
import DashboardFilter from './DashboardFilter'

// services
import DashboardService from '@/services/DashboardService'

export default {
    components: {
        MainApp, LineChart, DashboardCards, DashboardFilter
    },
    data () {
        return {
            filter: {
                year: new Date().getFullYear(),
                month: null,
            },
            options: {
                fileName: 'Reports 2020'
            },
            attritionData: {},
            headCountData: {},
            cardData: {}
        }
    },
    methods: {
        async exportReport () {
            // add export function here
        }
    },
    watch: {
        filter: {
            deep: true, // watch changes on object properties
            immediate: true,
            async handler (value) {
                // add filter param to route (think of optimized way)
                // const route = {
                //     name: 'dashboard',
                //     query: {
                //         year: value.year,
                //         month: value.month
                //     }
                // }
                // this.$router.push(route)
                const reportData = (await DashboardService.index(value)).data
                this.attritionData = new AttritionData(reportData.chartData.attritionRate, reportData.chartData.labels)
                this.headCountData = new HeadcountData(
                    reportData.chartData.contractorsAdded, 
                    reportData.chartData.contractorsRemoved, 
                    reportData.chartData.openingBalance, 
                    reportData.chartData.closingBalance,
                    reportData.chartData.labels
                )
                this.cardData = reportData.cardData
            }
        }
    }
}

// custom functions
function AttritionData (data, labels) {
    this.labels = labels
    this.datasets = [
        {
            label: 'Attrition Rate (%)',
            fill: false,
            borderColor: '#0D47A1',
            pointBackgroundColor: '#0D47A1',
            pointRadius: 4,
            data: data,
            spanGaps: true,
        }
    ]
}

function HeadcountData (addedData, removedData, openingData, closingData, labels) {
    this.labels = labels
    this.datasets = [
        {
            label: 'Added',
            fill: false,
            borderColor: '#00BFA5',
            pointBackgroundColor: '#00BFA5',
            pointRadius: 4,
            data: addedData
        },
        {
            label: 'Removed',
            fill: false,
            borderColor: '#C62828',
            pointBackgroundColor: '#C62828',
            pointRadius: 4,
            data: removedData,
            spanGaps: true,
        },
        {
            label: 'Opening',
            fill: false,
            borderColor: '#0D47A1',
            pointBackgroundColor: '#0D47A1',
            pointRadius: 4,
            data: openingData
        },
        {
            label: 'Closing',
            fill: false,
            borderColor: '#F9A825',
            pointBackgroundColor: '#F9A825',
            pointRadius: 4,
            data: closingData,
            spanGaps: true,
        }
    ]
}
</script>

<style scoped>

</style>