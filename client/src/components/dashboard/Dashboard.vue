<template>
    <main-app>
        <slot>
            <!-- <h1>Hello Dashboard</h1> -->
            <v-container fluid>
                <v-row class="mb-6">
                    <v-col
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

                            <v-card-actions>
                                <v-btn 
                                    text
                                    @click="helloWorld()">
                                    Learn More
                                </v-btn>
                            </v-card-actions>
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

export default {
    components: {
        MainApp
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

            from: '05/14/2017',
            to: '09/27/2019'
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
                const test = await DashboardService.helloWorld(filter)

                console.log(test)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
</style>