<template>
<div>
    <v-row align="center">
        <v-col
            md="3">
            <v-text-field
                label="Search user"
                prepend-inner-icon="mdi-account-search">
            </v-text-field>
        </v-col>
        <v-col
            md="6"
            offset-md="3"
            class="text-right">
            <fab-button-dropdown
                isDark
                icon="mdi-account-details"
                :items="details"
                :selected.sync="shownDetails"
                btnClass="mx-2"> 
            </fab-button-dropdown>
            <v-btn
                fab
                dark
                class="mr-2">
                <v-icon>mdi-file-export</v-icon>
            </v-btn>
            <v-btn
                fab
                dark>
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-col>
    </v-row>
    <v-row>
        <v-col
            md="12"
            class="pb-0">
            <v-data-table
                :headers="headers"
                :items="contractors"
                :items-per-page="10"
                class="elevation-1 pa-2">
                <template v-slot:item.dateOfBirth="{ item }">
                    {{ formatDate(item.dateOfBirth) }}
                </template>
                <template v-slot:item.dateStarted="{ item }">
                    {{ formatDate(item.dateStarted) }}
                </template>
                <template v-slot:item.dateRegularized="{ item }">
                    {{ formatDate(item.dateRegularized) }}
                </template>
                <template v-slot:item.paygradeEffectivityDate="{ item }">
                    {{ formatDate(item.paygradeEffectivityDate) }}
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)">
                        mdi-pencil
                    </v-icon>
                    <v-icon
                        small
                        color="red lighten-1"
                        @click="deleteItem(item)">
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-col>
    </v-row>
</div>
</template>

<script>
import FabButtonDropdown from '../layouts/FabButtonDropdown'

export default {
    components: {
        FabButtonDropdown
    },
    props: {
        contractors: null
    },
    data () {
        return {
            shownDetails: 0,
            headers: [],
            defaultHeaders: [
                // { text: 'ID', value: 'id'},
                { text: 'Last Name', value: 'lastName'},
                { text: 'First Name', value: 'firstName'},
                { text: 'Middle Name', value: 'middleName'},
            ],
            details: [
                {
                    title: 'Personal Info',
                    columns: [
                        { text: 'Nickname', value: 'nickname'},
                        { text: 'Nationality', value: 'nationality'},
                        { text: 'Gender', value: 'gender'},
                        { text: 'Date of Birth', value: 'dateOfBirth'},
                        { text: 'Marital Status', value: 'maritalStatus'},
                        { text: 'Degree', value: 'degree'},
                        { text: 'Program', value: 'program'},
                        { text: 'Actions', value: 'actions', sortable: false},
                    ]
                },
                {
                    title: 'Work Info',
                    columns: [
                        { text: 'Date Started', value: 'dateStarted'},
                        { text: 'Date Regularized', value: 'dateRegularized'},
                        { text: 'Status', value: 'employmentStatus'},
                        { text: 'Batch Number', value: 'batchNumber'},
                        { text: 'Actions', value: 'actions', sortable: false},
                    ]
                },
                {
                    title: 'Contact Info',
                    columns: [
                        { text: 'VI Email', value: 'viEmail'},
                        { text: 'Personal Email', value: 'personalEmail'},
                        { text: 'Landline Number', value: 'landlineNumber'},
                        { text: 'Emergency Contact Person', value: 'emergencyContactPerson'},
                        { text: 'Emergency Contact Number', value: 'emergencyContactNumber'},
                        { text: 'Skype', value: 'skype'},
                        { text: 'Facebook', value: 'facebook'},
                        { text: 'Actions', value: 'actions', sortable: false},
                    ]
                },
                {
                    title: 'Payroll Info',
                    columns: [
                        { text: 'Payoneer ID', value: 'payoneerId'},
                        { text: 'Bank Account', value: 'bankAccount'},
                        { text: 'Paygrade', value: 'paygrade'},
                        { text: 'Paygrade Effectivity Date', value: 'paygradeEffectivityDate'},
                        { text: 'Payment Term', value: 'paymentTerm'},
                        { text: 'Rate', value: 'rate'},
                        { text: 'Actions', value: 'actions', sortable: false},
                    ]
                },
                {
                    title: 'System Info',
                    columns: [
                        { text: 'Main ISP', value: 'mainIsp'},
                        { text: 'Backup ISP', value: 'backupIsp'},
                        { text: 'Noise Cancelling Headset', value: 'noiseCancellingHeadset'},
                        { text: 'OS and Processor', value: 'osProcessor'},
                        { text: 'RAM', value: 'ram'},
                        { text: 'Internet Speed', value: 'internetSpeed'},
                        { text: 'Actions', value: 'actions', sortable: false},
                    ]
                },
                {
                    title: 'SSS/Pagibig/Philhealth',
                    columns: [
                        { text: 'SSS', value: 'sss'},
                        { text: 'Pagibig', value: 'pagibig'},
                        { text: 'PhilHealth', value: 'philhealth'},
                        { text: 'Actions', value: 'actions', sortable: false},
                    ]    
                }
            ]
        }
    },
    methods: {
        formatDate (date) {
            if (date != null) {
                const d = new Date(date)
                let day = d.getDate()
                let month = d.getMonth() + 1
                let year = d.getFullYear()
                month = month.toString().length < 2 ? `0${month}` : month
                day = day.toString().length < 2 ? `0${day}` : day

                return [month, day, year].join('/')
            } else {
                return null
            }
        }
    },
    watch: {
        shownDetails: {
            immediate: true,
            handler (val) {
                this.headers = this.defaultHeaders.concat(this.details[val].columns)
            }
        }
    }
}
</script>

<style scoped>
</style>