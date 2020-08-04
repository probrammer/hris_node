<template>
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
                    <v-list-item-subtitle class="mb-1 text-left">{{card.title}}</v-list-item-subtitle>
                    <span class="text-md-h5 text-left">{{card.subtitle}}</span>
                </v-list-item-content>

                <v-list-item-icon>
                    <v-icon :color="card.iconColor">{{card.icon}}</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-card>
    </v-col>
</v-row>    
</template>

<script>
export default {
    data () {
        return {
            cards: [
                {
                    title: 'Contractors Added',
                    subtitle: '10',
                    icon: 'mdi-account-plus',
                    iconColor: 'teal accent-4'
                },
                {
                    title: 'Contractors Removed',
                    subtitle: '37',
                    icon: 'mdi-account-remove',
                    iconColor: 'red darken-3'
                },
                {
                    title: 'Total Headcount',
                    subtitle: '175',
                    icon: 'mdi-account-group',
                    iconColor: 'yellow darken-3'
                },
                {
                    title: 'Attrition Rate',
                    subtitle: '3.15',
                    icon: 'mdi-percent',
                    iconColor: 'blue darken-4'
                }
            ],
        }
    }
}
</script>

<style scoped>

</style>
