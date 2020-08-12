<template>
    <main-app>
        <v-row>
            <v-col
                md="12">  
                <v-card>
                    Active Users
                    <v-data-table
                        :headers="headers"
                        :items="contractors"
                        :items-per-page="5"
                        class="elevation-1">
                        <template v-slot:item.actions="{ item }">
                            <v-icon
                                small
                                color="blue darken-4"
                                class="mr-2"
                                @click="editItem(item)">
                                mdi-pencil
                            </v-icon>
                            <v-icon
                                small
                                color="red darken-4"
                                @click="deleteItem(item)">
                                mdi-delete
                            </v-icon>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </main-app>
</template>

<script>
import MainApp from '../layouts/MainApp'
import ContractorsService from '@/services/ContractorsService'

export default {
    components: {
        MainApp
    },
    data () {
        return {
            contractors: [],
            headers: [
                { text: 'First Name', value: 'firstName'},
                { text: 'Middle Name', value: 'firstName'},
                { text: 'Last Name', value: 'lastName'},
                { text: 'nickname', value: 'dateStarted'},
                { text: 'nationality', value: 'dateStarted'},
                { text: 'gender', value: 'dateStarted'},
                { text: 'date of birth', value: 'dateStarted'},
                { text: 'marital status', value: 'dateStarted'},
                { text: 'degree', value: 'dateStarted'},
                { text: 'program', value: 'dateStarted'},
                { text: 'sss', value: 'dateStarted'},
                { text: 'pagibig', value: 'dateStarted'},
                { text: 'philhealth', value: 'dateStarted'},
                { text: 'Actions', value: 'actions', sortable: false},
            ],
        }
    },
    async created () {
        const meme = (await ContractorsService.index()).data
        this.contractors = meme
    },
    async mounted () {
        const wsTest = (await ContractorsService.wsTest()).data
        const parser = new DOMParser() // xml parser
        const parsedDoc = parser.parseFromString(wsTest.data, 'text/xml') // parsing xml to html doc

        // this.wsData = parsedDoc.getElementsByTagName('login')[0].childNodes[0].nodeValue // get data based on HTML tags

        console.log(parsedDoc)
    }
}
</script>

<style scoped>

</style>