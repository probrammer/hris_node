<template>
    <v-row>
        <v-col
            cols="12"
            md="12"
            class="pb-0">
            <v-data-table
                :headers="table.headers"
                :items="data"
                :loading="isLoading"
                loading-text="Loading... Please wait"
                :items-per-page="10"
                :footer-props="table.footerProps"
                class="elevation-1">
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
</template>

<script>
export default {
    props: {
        data: null,
        detailsIndex: null,
        isLoading: false
    },
    data () {
        return {
            table: {
                headers: [],
                defaultHeaders: [
                    { text: 'Last Name', value: 'lastName'},
                    { text: 'First Name', value: 'firstName'},
                    { text: 'Middle Name', value: 'middleName'},
                ],
                footerProps: {
                    itemsPerPageOptions: [10, 50, 100, -1],
                    showFirstLastPage: true,
                    firstIcon: 'mdi-page-first',
                    lastIcon: 'mdi-page-last',
                    prevIcon: 'mdi-chevron-left',
                    nextIcon: 'mdi-chevron-right'
                }
            },
            details: [
                [
                    // personal info
                    { text: 'Nickname', value: 'nickname'},
                    { text: 'Nationality', value: 'nationality'},
                    { text: 'Gender', value: 'gender'},
                    { text: 'Date of Birth', value: 'dateOfBirth'},
                    { text: 'Marital Status', value: 'maritalStatus'},
                    { text: 'Degree', value: 'degree'},
                    { text: 'Program', value: 'program'},
                    { text: 'Actions', value: 'actions', sortable: false}
                ],
                [
                    // work info
                    { text: 'Date Started', value: 'dateStarted'},
                    { text: 'Date Regularized', value: 'dateRegularized'},
                    { text: 'Status', value: 'employmentStatus'},
                    { text: 'Batch Number', value: 'batchNumber'},
                    { text: 'Actions', value: 'actions', sortable: false}
                ],
                [
                    // contact info
                    { text: 'VI Email', value: 'viEmail'},
                    { text: 'Personal Email', value: 'personalEmail'},
                    { text: 'Landline Number', value: 'landlineNumber'},
                    { text: 'Emergency Contact Person', value: 'emergencyContactPerson'},
                    { text: 'Emergency Contact Number', value: 'emergencyContactNumber'},
                    { text: 'Skype', value: 'skype'},
                    { text: 'Facebook', value: 'facebook'},
                    { text: 'Actions', value: 'actions', sortable: false}
                ],
                [
                    // payroll info
                    { text: 'Payoneer ID', value: 'payoneerId'},
                    { text: 'Bank Account', value: 'bankAccount'},
                    { text: 'Paygrade', value: 'paygrade'},
                    { text: 'Paygrade Effectivity Date', value: 'paygradeEffectivityDate'},
                    { text: 'Payment Term', value: 'paymentTerm'},
                    { text: 'Rate', value: 'rate'},
                    { text: 'Actions', value: 'actions', sortable: false}
                ],
                [
                    // system info
                    { text: 'Main ISP', value: 'mainIsp'},
                    { text: 'Backup ISP', value: 'backupIsp'},
                    { text: 'Noise Cancelling Headset', value: 'noiseCancellingHeadset'},
                    { text: 'OS and Processor', value: 'osProcessor'},
                    { text: 'RAM', value: 'ram'},
                    { text: 'Internet Speed', value: 'internetSpeed'},
                    { text: 'Actions', value: 'actions', sortable: false}
                ],
                [
                    // sss/pagibig/philhealth info
                    { text: 'SSS', value: 'sss'},
                    { text: 'Pagibig', value: 'pagibig'},
                    { text: 'PhilHealth', value: 'philhealth'},
                    { text: 'Actions', value: 'actions', sortable: false}
                ]
            ],
            
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
        detailsIndex: {
            immediate: true,
            handler (val) {
                this.table.headers = this.table.defaultHeaders.concat(this.details[val])
            }
        }
    }
}
</script>

<style scoped>
</style>