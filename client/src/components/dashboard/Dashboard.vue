<template>
    <main-app>
        <slot>
            <v-container fluid>
                <!-- cards -->
                <dashboard-cards></dashboard-cards>

                <!-- filter -->
                <dashboard-filter 
                    @set-year="filter.year = $event" 
                    @set-month="filter.month = $event">
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
            attritionData: new AttritionData ([10, 20, 30, 25, 15]),
            headCountData: new HeadcountData (
                [100,240,320,221,114],
                [210,158,208,185,160],
                [200,300,250,200,150],
                [210,310,420,310,210]
            ),
            filter: {
                year: new Date().getFullYear(),
                month: null
            }
        }
    },
    methods: {
        async helloWorld () {
            const filter = {
                year: this.filter.year,
                month: this.filter.month 
            }

            // change route to '/current_route/?filter...
            const route = {
                name: 'dashboard',
                query: filter
            }
            
            this.$router.push(route)

            try {
                console.time('fetch')
                const test = await DashboardService.index(filter)
                this.attritionData = new AttritionData ([200, 300, 400, 500, 600])
                this.headCountData = new HeadcountData (
                    [120,220,300,241,124],
                    [290,198,288,145,170],
                    [250,320,210,230,180],
                    [280,390,440,350,220]
                )
                console.timeEnd('fetch')
            } catch (err) {
                console.log(err)
            }   
        },
    },
    watch: {
        filter: {
            deep: true, // watch changes on object properties
            immediate: true,
            async handler (value) {
                const test = await DashboardService.index(value)
            }
        }
    },
    created () {
        
    }
}

// custom functions
function AttritionData (data) {
    this.labels = ['Robin', 'Mark', 'Josh', 'Lili', 'Ino']
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

function HeadcountData (addedData, removedData, openingData, closingData) {
    this.labels = ['Blue', 'Red', 'Green', 'Yellow', 'Cyan'],
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