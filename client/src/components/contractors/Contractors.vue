<template>
    <main-app>
        <slot>
            <v-container fluid>
                <contractors-table-toolbar
                    @details-selected="table.detailsIndex = $event"
                    @store-contractor="storeContractor($event)">
                </contractors-table-toolbar>
                <v-card>
                    <v-card-title>List of Contractors</v-card-title>
                    <contractors-table
                        :isLoading="table.isLoading"
                        :data="table.data"
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
                isLoading: false
            }
        }
    },
    async created () {
        const contractors = (await ContractorsService.index()).data
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