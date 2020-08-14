<template>
<v-row 
    class="mb-2">
    <v-col
        md="3">
        <v-card
            class="pa-2"
            tile>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-subtitle class="mb-1 text-left">Contractors Added</v-list-item-subtitle>
                    <span class="text-md-h5 text-left">{{cardData.totalAdded}}</span>
                </v-list-item-content>

                <v-list-item-icon>
                    <v-icon color="teal lighten-1">mdi-account-plus</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-card>
    </v-col>
    <v-col
        md="3">
        <v-card
            class="pa-2"
            tile>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-subtitle class="mb-1 text-left">Contractors Removed</v-list-item-subtitle>
                    <span class="text-md-h5 text-left">{{cardData.totalRemoved}}</span>
                </v-list-item-content>

                <v-list-item-icon>
                    <v-icon color="red lighten-1">mdi-account-remove</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-card>
    </v-col>
    <v-col
        md="3">
        <v-card
            class="pa-2"
            tile>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-subtitle class="mb-1 text-left">Total Headcount</v-list-item-subtitle>
                    <span class="text-md-h5 text-left">{{cardData.totalContractors}}</span>
                </v-list-item-content>

                <v-list-item-icon>
                    <v-icon color="yellow darken-3">mdi-account-group</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-card>
    </v-col>
    <v-col
        md="3">
        <v-card
            class="pa-2"
            tile>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-subtitle class="mb-1 text-left">Attrition Rate</v-list-item-subtitle>
                    <span class="text-md-h5 text-left">{{cardData.attritionRate}}</span>
                </v-list-item-content>

                <v-list-item-icon>
                    <v-icon color="blue darken-3">mdi-percent</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-card>
    </v-col>
</v-row>    
</template>

<script>
export default {
    props: {
        cardData: {}
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>

</style>
