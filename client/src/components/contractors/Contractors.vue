<template>
    <main-app>
        <slot>
            <v-container fluid>
                <contractors-table-toolbar
                    @details-selected="detailsIndex = $event"
                    @store-contractor="storeContractor($event)">
                </contractors-table-toolbar>
                <contractors-table
                    :isLoading="isLoading"
                    :contractors="contractors"
                    :detailsIndex="detailsIndex">
                </contractors-table>
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
            // for contractors-table
            contractors: [],
            detailsIndex: 0,
            isLoading: false,
        }
    },
    async created () {
        const meme = (await ContractorsService.index()).data
        this.contractors = meme
    },
    methods: {
        async storeContractor (data) {
            this.isLoading = true
            const contractor = await ContractorsService.store(data)
            this.isLoading = false
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