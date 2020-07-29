<template>
    <main-app>
        <slot>
            <v-container fluid>
                <v-row 
                    class="mb-2">
                    <v-col
                        md="3"
                        v-for="(card, index) in cards"
                        :key="index">
                        <v-card
                            class="pa-2"
                            tile>
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="mb-1 text-left" @click="helloWorld()">{{card.title}}</v-list-item-subtitle>
                                    <span class="text-md-h5 text-left">{{card.subtitle}}</span>
                                </v-list-item-content>

                                <v-list-item-icon>
                                    <v-icon :color="card.iconColor">{{card.icon}}</v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </v-row>

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
import MainApp from '../layouts/MainApp'
import DashboardService from '@/services/DashboardService'
import LineChart from './LineChart'

export default {
    components: {
        MainApp, LineChart
    },
    data () {
        return {
            cards: [
                {
                    title: 'Contractors Added',
                    subtitle: '10',
                    icon: 'mdi-account-plus',
                    iconColor: 'teal darken-1'
                },
                {
                    title: 'Contractors Removed',
                    subtitle: '37',
                    icon: 'mdi-account-remove',
                    iconColor: 'red darken-1'
                },
                {
                    title: 'Total Headcount',
                    subtitle: '175',
                    icon: 'mdi-account-group',
                    iconColor: 'orange darken-1'
                },
                {
                    title: 'Attrition Rate',
                    subtitle: '3.15',
                    icon: 'mdi-percent',
                    iconColor: 'deep-purple darken-1'
                }
            ],
            attritionData: new AttritionData ([10, 20, 30, 25, 15]),
            headCountData: new HeadcountData (
                [100,240,320,221,114],
                [210,158,208,185,160],
                [200,300,250,200,150],
                [210,310,420,310,210]
            ),
            dateStarted: [new Date('2012-01-01'), new Date('2021-01-01')],
            dateOfSeparation: null,
        }
    },
    methods: {
        async helloWorld () {
            const filter = {
                    dateStarted: this.dateStarted,
                    dateOfSeparation: this.dateOfSeparation
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
        }
    },
    watch: {
        picker: {
            handler (val) {
                console.log(val)
            }
        }
    },
}

// custom functions
function AttritionData (data) {
    this.labels = ['Robin', 'Mark', 'Josh', 'Lili', 'Ino']
    this.datasets = [
        {
            label: 'Attrition Rate (%)',
            fill: false,
            borderColor: '#f06232',
            pointBackgroundColor: '#f06232',
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
            borderColor: '#a0bbe8',
            pointBackgroundColor: '#a0bbe8',
            pointRadius: 4,
            data: addedData
        },
        {
            label: 'Removed',
            fill: false,
            borderColor: '#f06232',
            pointBackgroundColor: '#f06232',
            pointRadius: 4,
            data: removedData,
            spanGaps: true,
        },
        {
            label: 'Opening',
            fill: false,
            borderColor: '#a0bbe8',
            pointBackgroundColor: '#a0bbe8',
            pointRadius: 4,
            data: openingData
        },
        {
            label: 'Closing',
            fill: false,
            borderColor: '#f06232',
            pointBackgroundColor: '#f06232',
            pointRadius: 4,
            data: closingData,
            spanGaps: true,
        }
    ]
}
</script>

<style scoped>

</style>