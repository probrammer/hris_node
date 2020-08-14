<template>
    <v-data-table
        :headers="headers"
        :items="contractors"
        :items-per-page="10"
        class="elevation-1">
        <template v-slot:item.actions="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)">
                mdi-delete
            </v-icon>
        </template>
    </v-data-table> 
</template>

<script>
export default {
    props: {
        contractors: null
    },
    data () {
        return {
            headers: [
                { text: 'First Name', value: 'firstName'},
                { text: 'Middle Name', value: 'firstName'},
                { text: 'Last Name', value: 'lastName'},
                { text: 'nickname', value: 'lastName'},
                { text: 'nationality', value: 'lastName'},
                { text: 'gender', value: 'lastName'},
                { text: 'date of birth', value: 'dateStarted'},
                { text: 'marital status', value: 'lastName'},
                { text: 'degree', value: 'dateStarted'},
                { text: 'program', value: 'lastName'},
                // { text: 'sss', value: 'lastName'},
                // { text: 'pagibig', value: 'lastName'},
                // { text: 'philhealth', value: 'lastName'},
                { text: 'Actions', value: 'actions', sortable: false},
            ],
        }
    }
}
</script>

<style scoped>

</style>