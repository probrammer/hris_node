<template>
    <main-app>
        <slot>
            <v-container fluid>
                <contractors-table-toolbar
                    @search="table.search = $event"
                    @details-selected="table.detailsIndex = $event"
                    @store-contractor="storeContractor($event)">
                </contractors-table-toolbar>
                <v-card>
                    <v-card-title>
                        List of Contractors
                        <!-- <v-chip small dark color="green lighten-1" class="mx-1">{{active}}</v-chip>
                        <v-chip small dark color="red lighten-1">{{inactive}}</v-chip> -->
                    </v-card-title>
                    <contractors-table
                        :data="table.data"
                        :search="table.search"
                        :isLoading="table.isLoading"
                        :detailsIndex="table.detailsIndex">
                    </contractors-table>
                </v-card>
            </v-container>
        </slot>
    </main-app>
</template>

<script>
import MainApp from '../layouts/MainApp'
import ContractorsTable from './ContractorsTable'
import ContractorsTableToolbar from './ContractorsTableToolbar'
import ContractorService from '@/services/ContractorService'

export default {
    components: {
        MainApp, ContractorsTable, ContractorsTableToolbar
    },
    data () {
        return {
            table: {
                data: [],
                detailsIndex: 0,
                isLoading: false,
                search: ''
            },
        }
    },
    async created () {
        this.table.data = (await ContractorService.index()).data
    },
    methods: {
        async storeContractor (data) {
            this.table.isLoading = true
            const contractor = await ContractorService.store(data).then(() => this.table.isLoading = false)
        }
    }
    
}
</script>

<style scoped>

</style>