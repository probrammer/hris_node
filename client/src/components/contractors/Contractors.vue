<template>
    <main-app>
        <v-row>
            <v-col
                md="12">  
                <v-card>
                    <v-card-title>List of Contractors</v-card-title>
                    <v-row
                        class="px-3">
                        <v-col 
                            md="3">
                            sad
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            md="12">
                            <contractors-table 
                                :contractors="contractors">
                            </contractors-table>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
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