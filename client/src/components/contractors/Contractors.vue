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
import ContractorsService from '@/services/ContractorsService'

export default {
    components: {
        MainApp, ContractorsTable, ContractorsTableToolbar
    },
    data () {
        return {
            // contractors-table
            table: {
                data: [],
                detailsIndex: 0,
                isLoading: false,
                search: ''
            },
            // active: 0,
            // inactive: 0
        }
    },
    async created () {
        const contractors = (await ContractorsService.index()).data
        // contractors.map((v) => v.isActive ? this.active++ : this.inactive++)
        this.table.data = contractors
    },
    methods: {
        async storeContractor (data) {
            this.table.isLoading = true
            const contractor = await ContractorsService.store(data)
            this.table.isLoading = false
        }
    }
    // WorkSnaps integration test
    // async mounted () {
    //     const wsTest = (await ContractorsService.wsTest()).data
    //     const parser = new DOMParser() // xml parser
    //     const parsedDoc = parser.parseFromString(wsTest.data, 'text/xml') // parsing xml to html doc

    //     // this.wsData = parsedDoc.getElementsByTagName('login')[0].childNodes[0].nodeValue // get data based on HTML tags

    //     console.log(parsedDoc)
    // }
}
</script>

<style scoped>

</style>