<template>
<div>
    <v-row align="center">
        <v-col cols="12" md="3">
            <v-text-field class="textfield"
                solo
                dense
                prepend-inner-icon="mdi-magnify"
                label="Search">
            </v-text-field>
        </v-col>
        <v-col class="text-right">
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        dark
                        fab
                        v-bind="attrs"
                        v-on="on"
                        class="mx-1">
                        <v-icon>mdi-account-details</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(option, index) in details.options"
                    :key="index"
                    @click="details.currentIndex = index">
                    <v-list-item-title>{{ option }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn
                dark
                fab
                class="mx-1">
                <v-icon>mdi-file-export</v-icon>
            </v-btn>
            <v-btn
                dark
                fab
                class="mx-1"
                @click="$emit('store-contractor')">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="12">
            <v-data-table
                :headers="table.headers"
                :items="data"
                :footer-props="table.footerProps"
                :items-per-page="25"
                loading-text="Loading... Please wait"
                class="elevation-2">
                <template v-slot:item.isActive="{ item }">
                    <v-chip x-small dark :color="item.isActive ? 'teal lighten-1' : 'red lighten-1'">
                        {{ item.isActive ? 'Active' : 'Inactive'}}
                    </v-chip>
                </template>
                <template v-slot:item.noiseCancellingHeadset="{ item }">
                    {{ item.noiseCancellingHeadset ? 'Yes' : 'No' }}
                </template>
                <template v-slot:item.dateOfBirth="{ item }">
                    {{ formatDate(item.dateOfBirth) }}
                </template>
                <template v-slot:item.dateStarted="{ item }">
                    {{ formatDate(item.dateStarted) }}
                </template>
                <template v-slot:item.dateRegularized="{ item }">
                    {{ formatDate(item.dateRegularized) }}
                </template>
                <template v-slot:item.dateOfSeparation="{ item }">
                    {{ formatDate(item.dateOfSeparation) }}
                </template>
                <template v-slot:item.paygradeEffectivityDate="{ item }">
                    {{ formatDate(item.paygradeEffectivityDate) }}
                </template>
                <template v-slot:item.department="{ item }">
                    {{ !item.department ? null : item.department.title}}
                </template>
                <template v-slot:item.job_titles="{ item }">
                    <v-list-item class="pa-0"
                        v-for="(jobTitle, index) in item.job_titles"
                        :key="index">
                        {{jobTitle.title}}
                    </v-list-item>
                </template>
                <template v-slot:item.direct_managers="{ item }">
                    <v-list-item class="pa-0"
                        v-for="(manager, index) in item.direct_managers"
                        :key="index">
                        {{manager.firstName + ' ' + manager.lastName}}
                    </v-list-item>
                </template>
                <template v-slot:item.contractor_vi_emails="{ item }">
                    <v-list-item class="pa-0"
                        v-for="(viEmail, index) in item.contractor_vi_emails"
                        :key="index">
                        {{viEmail.viEmail}}
                    </v-list-item>
                </template>
                <template v-slot:item.contractor_personal_emails="{ item }">
                    <v-list-item class="pa-0"
                        v-for="(personalEmail, index) in item.contractor_personal_emails"
                        :key="index">
                        {{personalEmail.personalEmail}}
                    </v-list-item>
                </template>
                <template v-slot:item.contractor_mobile_numbers="{ item }">
                    <v-list-item class="pa-0"
                        v-for="(mobileNumber, index) in item.contractor_mobile_numbers"
                        :key="index">
                        {{mobileNumber.mobileNumber}}
                    </v-list-item>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon
                        small
                        class="mr-2"
                        @click="$emit('update-contractor', item.id)">
                        mdi-lead-pencil
                    </v-icon>
                    <v-icon
                        small
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
import Formatter from '@/mixins/Formatter'

export default {
    props: {
        data: Array,
    },
    mixins: [Formatter], //global date formatter method
    data () {
        return {
            table: {
                headers: [],
                defaultHeaders: [
                    { text: 'Status', value: 'isActive'},
                    { text: 'Last Name', value: 'lastName'},
                    { text: 'First Name', value: 'firstName'},
                    { text: 'Middle Name', value: 'middleName'},
                ],
                footerProps: {
                    itemsPerPageOptions: [25, 50, 100, -1],
                    showFirstLastPage: true,
                    firstIcon: 'mdi-page-first',
                    lastIcon: 'mdi-page-last',
                    prevIcon: 'mdi-chevron-left',
                    nextIcon: 'mdi-chevron-right'
                }
            },
            details: {
                currentIndex: 0,
                 options: [
                    'Personal Information',
                    'Work Information',
                    'Contact Information',
                    'Payroll Information',
                    'System Information',
                    'Perks'
                ],
                columns: [
                    [
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
                        { text: 'Department', value: 'department'},
                        { text: 'Job Title', value: 'job_titles'},
                        { text: 'Direct Manager', value: 'direct_managers'},
                        { text: 'Date Started', value: 'dateStarted'},
                        { text: 'Date Regularized', value: 'dateRegularized'},
                        { text: 'Employment Status', value: 'employmentStatus'},
                        { text: 'Batch Number', value: 'batchNumber'},
                        { text: 'Date of Separation', value: 'dateOfSeparation'},
                        { text: 'Actions', value: 'actions', sortable: false}
                    ],
                    [
                        { text: 'VI Email', value: 'contractor_vi_emails'},
                        { text: 'Personal Email', value: 'contractor_personal_emails'},
                        { text: 'Mobile Number', value: 'contractor_mobile_numbers'},
                        { text: 'Landline Number', value: 'landlineNumber'},
                        { text: 'Emergency Contact Person', value: 'emergencyContactPerson'},
                        { text: 'Emergency Contact Number', value: 'emergencyContactNumber'},
                        { text: 'Skype', value: 'skype'},
                        { text: 'Facebook', value: 'facebook'},
                        { text: 'Actions', value: 'actions', sortable: false}
                    ],
                    [
                        { text: 'Payoneer ID', value: 'payoneerId'},
                        { text: 'Bank Account', value: 'bankAccount'},
                        { text: 'Paygrade', value: 'paygrade'},
                        { text: 'Paygrade Effectivity Date', value: 'paygradeEffectivityDate'},
                        { text: 'Payment Term', value: 'paymentTerm'},
                        { text: 'Rate', value: 'rate'},
                        { text: 'Actions', value: 'actions', sortable: false}
                    ],
                    [
                        { text: 'Main ISP', value: 'mainIsp'},
                        { text: 'Backup ISP', value: 'backupIsp'},
                        { text: 'Noise Cancelling Headset?', value: 'noiseCancellingHeadset'},
                        { text: 'OS and Processor', value: 'osProcessor'},
                        { text: 'RAM', value: 'ram'},
                        { text: 'Internet Speed', value: 'internetSpeed'},
                        { text: 'Actions', value: 'actions', sortable: false}
                    ],
                    [
                        { text: 'SSS', value: 'sss'},
                        { text: 'Pagibig', value: 'pagibig'},
                        { text: 'PhilHealth', value: 'philhealth'},
                        { text: 'Actions', value: 'actions', sortable: false}
                    ]
                ]
            },
        }
    },
    methods: {
        tryMethod() {
            console.log('try')
        }
    },
    watch: {
        details: {
            deep: true,
            immediate: true,
            handler (val) {
                this.table.headers = this.table.defaultHeaders.concat(this.details.columns[val.currentIndex])
            }
        }
    }
}
</script>

<style scoped>
.textfield{
    height: 40px;
}
</style>