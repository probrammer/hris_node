<template>
    <main-app>
        <slot>
            <v-container fluid>
                <contractors-table
                    :contractors="contractors">
                </contractors-table>
            </v-container>
        </slot>
    </main-app>
</template>

<script>
import MainApp from '../layouts/MainApp'
import ContractorsTable from './ContractorsTable'
import ContractorsService from '@/services/ContractorsService'

export default {
    components: {
        MainApp, ContractorsTable
    },
    data () {
        return {
            contractors: []
        }
    },
    async created () {
        const meme = (await ContractorsService.index()).data
        this.contractors = meme
    },
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