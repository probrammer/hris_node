<template>
    <v-dialog  
        persistent
        scrollable
        max-width="800px"
        v-model="dialog">
        <v-card>
            <v-card-title>
                <span class="headline">{{title}}</span>
            </v-card-title>
            <v-card-text>
                <v-container class="text-left">
                    <store-update-nav
                        @change-step="currentStep = $event">
                    </store-update-nav>
                    <!-- PERSONAL -->
                    <div v-show="currentStep == 0">
                        <v-row>
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    label="First name*"
                                    v-model="data.firstName">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field 
                                    label="Middle name"
                                    hint="Leave blank if no middle name"
                                    v-model="data.middleName">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    label="Last name*"
                                    v-model="data.lastName">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    label="Nickname"
                                    v-model="data.nickname">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    label="Nationality*"
                                    v-model="data.nationality">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    label="Gender*"
                                    :items="['Male', 'Female']"
                                    v-model="data.gender">
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    persistent-hint
                                    label="Date of Birth*"
                                    hint="Use mm/dd/yyyy format"
                                    v-model="data.dateOfBirth">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    label="Marital Status"
                                    :items="['Single', 'Married', 'Widowed', 'Divorced']"
                                    v-model="data.maritalStatus">
                                </v-select>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-select
                                    label="Educational Attainment"
                                    :items="['College Graduate', 'Vocational Graduate' ,'College Undergraduate', 'Highschool Graduate', 'Elementary Graduate']"
                                    v-model="data.degree">
                                </v-select>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    persistent-hint
                                    label="Degree Program"
                                    hint="Start with BS/BA/etc"
                                    v-model="data.program">
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <!-- WORK -->
                    <div v-show="currentStep == 1">
                        <v-row>
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    label="Batch Number"
                                    v-model="data.batchNumber">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    label="Employment Status*"
                                    :items="['Probationary', 'Full-Time Contractor']"
                                    v-model="data.employmentStatus">
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    required
                                    persistent-hint
                                    label="Date Started*"
                                    hint="Use mm/dd/yyyy format"
                                    v-model="data.dateStarted">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                    persistent-hint
                                    label="Date Regularized"
                                    hint="Use mm/dd/yyyy format"
                                    v-model="data.dateRegularized">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    label="Department*"
                                    :items="departmentOpt"
                                    v-model="data.departmentId">
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                <v-select
                                    multiple
                                    label="Direct Manager*"
                                    :items="managerOpt"
                                    v-model="data.direct_managers">
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-select
                                    multiple
                                    required
                                    label="Job Titles*"
                                    :items="jobTitleOpt"
                                    v-model="data.job_titles">
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    required
                                    multiple
                                    label="Role*"
                                    :items="[1,2,3,4,5]"
                                    v-model="data.roles">
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-switch class="mx-2" label="People Manager" v-model="data.isManager"></v-switch>
                            </v-col>
                        </v-row>
                    </div>
                    <!-- CONTACT -->
                    <div v-show="currentStep == 2">
                        <v-row>
                            <v-col cols="12" md="4" class="pb-0"
                                v-for="(viEmail, index) in data.contractor_vi_emails"
                                :key="index">
                                <v-text-field
                                    required
                                    label="VI Email"
                                    v-model="data.contractor_vi_emails">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" class="py-0">
                                <v-btn 
                                    small
                                    dark
                                    color="teal lighten-1"
                                    @click="addTextField(data.contractor_vi_emails)">
                                    Add Email
                                </v-btn>
                                <v-btn
                                    small
                                    dark
                                    color="red lighten-1"
                                    v-if="data.contractor_vi_emails.length > 1"
                                    @click="deleteTextField(data.contractor_vi_emails)">
                                    Remove Email
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4" class="pb-0"
                                v-for="(personalEmail, index) in data.contractor_personal_emails"
                                :key="index">
                                <v-text-field
                                    label="Personal Email"
                                    v-model="data.contractor_personal_emails">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" class="py-0">
                                <v-btn
                                    small
                                    dark
                                    color="teal lighten-1"
                                    @click="addTextField(data.contractor_personal_emails)">
                                    Add Email
                                </v-btn>
                                <v-btn
                                    small
                                    dark
                                    color="red lighten-1"
                                    v-if="data.contractor_personal_emails.length > 1"
                                    @click="deleteTextField(data.contractor_personal_emails)">
                                    Remove Email
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4" class="pb-0"
                                v-for="(mobileNumber, index) in data.contractor_mobile_numbers"
                                :key="index">
                                <v-text-field
                                    label="Mobile Number"
                                    v-model="data.contractor_mobile_numbers">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" class="py-0">
                                <v-btn
                                    small
                                    dark
                                    color="teal lighten-1"
                                    @click="addTextField(data.contractor_mobile_numbers)">
                                    Add Contact No.
                                </v-btn>
                                <v-btn
                                    small
                                    dark
                                    color="red lighten-1"
                                    v-if="data.contractor_mobile_numbers.length > 1"
                                    @click="deleteTextField(data.contractor_mobile_numbers)">
                                    Remove Contact No.
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    persistent-hint
                                    label="Landline Number"
                                    hint="Use format XXX-XXXX"
                                    v-model="data.landlineNumber">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    label="Emergency Contact Person"
                                    v-model="data.emergencyContactPerson">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    persistent-hint
                                    label="Emergency Contact Number"
                                    hint="Use format +639123456789"
                                    v-model="data.emergencyContactNumber">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    label="Skype ID"
                                    v-model="data.skype">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    label="Facebook Profile"
                                    v-model="data.facebook">
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <!-- PAYROLL -->
                    <div v-show="currentStep == 3">
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="Payoneer ID"
                                    v-model="data.payoneerId">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="Bank Account"
                                    v-model="data.bankAccount">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select
                                    label="Paygrade"
                                    :items="['3', '4', '5', '6', '7']"
                                    v-model="data.paygrade">
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    persistent-hint
                                    label="Paygrade Effectivity date"
                                    hint="Use mm/dd/yyyy format"
                                    v-model="data.paygradeEffectivityDate">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select
                                    label="Payment Term"
                                    :items="['Hourly', 'Monthly']"
                                    v-model="data.paymentTerm">
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    type="number"
                                    label="Rate"
                                    v-model="data.rate">
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <!-- SYSTEM -->
                    <div v-show="currentStep == 4">
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="Main ISP"
                                    v-model="data.mainIsp">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="Backup ISP"
                                    v-model="data.backupIsp">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select
                                    label="Internet Speed"
                                    :items="['5-10mbps', '11-15mbps', '16-20mbps', '21-25mbps', '> 25mbps']"
                                    v-model="data.internetSpeed">
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="OS and Processor"
                                    v-model="data.osProcessor">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select
                                    label="RAM"
                                    :items="['4gb', '8gb', '12gb', '16gb', '20gb', '24gb', '28gb', '32gb']"
                                    v-model="data.ram">
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select
                                    label="Noise Cancelling Headset?"
                                    :items="['Yes', 'No']"
                                    v-model="data.noiseCancellingHeadset">
                                </v-select>
                            </v-col>
                        </v-row>
                    </div>
                    <!-- PERK -->
                    <div v-show="currentStep == 5">
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="SSS Number"
                                    v-model="data.sss">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="Pagibig Number"
                                    v-model="data.pagibig">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="PhilHealth Number"
                                    v-model="data.philhealth">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-select
                                    multiple
                                    label="Perks"
                                    :items="perkOpt"
                                    v-model="data.perks">
                                </v-select>
                            </v-col>
                        </v-row>
                    </div>
                    <small class="text-subtitle-2">*indicates required field</small>
                </v-container>
                <div class="text-right">
                    <v-btn text @click="closeDialog()">Close</v-btn>
                    <v-btn text @click="saveChanges()">Save</v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import StoreUpdateNav from './StoreUpdateNav'

import Formatter from '@/mixins/Formatter'

export default {
    components: {
        StoreUpdateNav
    },
    props: {
        departmentOpt: Array,
        jobTitleOpt: Array,
        perkOpt: Array,
        managerOpt: Array,

        title: String,
        contractorData: Object,

        dialog: Boolean,
    },
    mixins: [Formatter],
    data () {
        return {
            // nav
            currentStep: 0,
            data: {
            // personalInformation
                firstName: '',
                middleName: '',
                lastName: '',
                nickname: '',
                nationality: '',
                gender: '',
                dateOfBirth: '',
                maritalStatus: '',
                degree: '',
                program: '',
            // workInformation
                batchNumber: '',
                employmentStatus: '',
                dateStarted: '',
                dateRegularized: '',
                departmentId: '',
                isManager: false,
                contractor_direct_managers: [],
                job_titles: [],
                roles: [1,2],
            // contactInformation
                contractor_vi_emails: [],
                contractor_personal_emails: [],
                contractor_mobile_numbers: [],
                landlineNumber: '',
                emergencyContactPerson: '',
                emergencyContactNumber: '',
                skype: '',
                facebook: '',
            // payrollInformation
                payoneerId: '',
                bankAccount: '',
                paygrade: '',
                paygradeEffectivityDate: '',
                paymentTerm: '',
                rate: '',
            // systemInformation
                mainIsp: '',
                backupIsp: '',
                internetSpeed: '',
                osProcessor: '',
                ram: '',
                noiseCancellingHeadset: false,
            // perkInformation
                sss: '',
                pagibig: '',
                philhealth: '',
                perks: []
            }
        }
    },
    methods: {
        addTextField (array) {
            array.push('')
        },
        deleteTextField (array) {
            array.pop()
        },
        closeDialog () {
            this.$emit('update:dialog', false)
        },
        saveChanges () {
            // this.$emit('update:dialog', false)
            // this.$emit('save-changes', this.data)
            console.log(this.data)
        },
        trialAndError (array) {
            return arrayOfObjectsToString(array)
        }
    },
    watch: {
        contractorData: {
            handler (val) {
                this.data = val
                this.data.direct_managers = this.arrayOfObjectsToString(val.direct_managers, 'id')
                this.data.job_titles = this.arrayOfObjectsToString(val.job_titles, 'id')
                this.data.roles = this.arrayOfObjectsToString(val.roles, 'id')
                this.data.contractor_vi_emails = this.arrayOfObjectsToString(val.contractor_vi_emails, 'viEmail')
                this.data.contractor_personal_emails = this.arrayOfObjectsToString(val.contractor_personal_emails, 'personalEmail')
                this.data.contractor_mobile_numbers = this.arrayOfObjectsToString(val.contractor_mobile_numbers, 'mobileNumber')
            }
        },
        data: {
            deep: true,
            immediate: true,
            handler (val) {
                if (val.contractor_vi_emails.length < 1) {
                    this.addTextField(val.contractor_vi_emails)
                }
                if (val.contractor_personal_emails.length < 1) {
                    this.addTextField(val.contractor_personal_emails)
                }
                if (val.contractor_mobile_numbers.length < 1) {
                    this.addTextField(val.contractor_mobile_numbers)
                }
            }
        }
    },
}
</script>

<style scoped>

</style>