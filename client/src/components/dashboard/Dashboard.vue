<template>
    <main-app>
        <slot>
            <v-container fluid>
                <v-row
                    class="mb-2">
                    <v-col>
                        <v-card
                            class="pa-2">
                            <h3 class="text-left">Filters:</h3>
                            
                        </v-card>
                    </v-col>
                </v-row>

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
                                    <v-list-item-title class="mb-1 text-left">{{card.title}}</v-list-item-title>
                                    <v-list-item-subtitle class="text-left">{{card.subtitle}}</v-list-item-subtitle>
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
                            <line-chart :chartData="headCountData"></line-chart>
                        </v-card>
                    </v-col>

                    <!-- attrition chart -->
                    <v-col md="6">
                        <v-card
                            class="pa-2">
                            <h3 class="text-md-body-1">Attrition Report</h3>
                            <line-chart :chartData="attritionData"></line-chart>
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

            from: '05/14/2017 00:00:00',
            to: '09/28/2019 00:00:00',

            attritionData: {
                labels: ['Robin', 'Mark', 'Josh', 'Lili', 'Ino'],
                datasets: [
                    {
                        label: 'Attrition Rate (%)',
                        fill: false,
                        borderColor: '#f06232',
                        pointBackgroundColor: '#f06232',
                        pointRadius: 4,
                        data: [20,15,29,30,40],
                        spanGaps: true,
                    }
                ]
            },
            headCountData: {
                labels: ['Blue', 'Red', 'Green', 'Yellow', 'Cyan'],
                datasets: [
                    {
                        label: 'Added',
                        fill: false,
                        borderColor: '#a0bbe8',
                        pointBackgroundColor: '#a0bbe8',
                        pointRadius: 4,
                        data: [1,2, 4, 0.1, 1.2, 2.7]
                    },
                    {
                        label: 'Removed',
                        fill: false,
                        borderColor: '#f06232',
                        pointBackgroundColor: '#f06232',
                        pointRadius: 4,
                        data: [20,15,29,30,40],
                        spanGaps: true,
                    },
                    {
                        label: 'Opening',
                        fill: false,
                        borderColor: '#a0bbe8',
                        pointBackgroundColor: '#a0bbe8',
                        pointRadius: 4,
                        data: [11,20, 34, 26, 45, 27]
                    },
                    {
                        label: 'Closing',
                        fill: false,
                        borderColor: '#f06232',
                        pointBackgroundColor: '#f06232',
                        pointRadius: 4,
                        data: [21,25,59,70,100],
                        spanGaps: true,
                    }
                ]
            }
        }
    },
    methods: {
        async helloWorld () {
            const filter = {
                    from: this.from,
                    to: this.to
                }   

            // change route to '/current_route/?filter...
            const route = {
                name: 'dashboard',
                query: filter
            }
            
            this.$router.push(route)

            try {
                const test = await DashboardService.index(filter)
                console.log(test.data)
            } catch (err) {
                console.log(err)
            }   
        }
    }
}
</script>

<style scoped>

</style>