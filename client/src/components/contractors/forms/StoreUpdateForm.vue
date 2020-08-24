<template>
<div class="text-left">
    <v-container>
        <store-update-nav
            @change-step="currentStep = $event">
        </store-update-nav>
        <personal-information
            v-show="currentStep == 0"
            :saving="saving"
            :data.sync="personalInformation">
        </personal-information>
        <work-information
            v-show="currentStep == 1"
            :saving="saving"
            :data.sync="workInformation">
        </work-information>
        <contact-information
            v-show="currentStep == 2"
            :saving="saving"
            :data.sync="contactInformation">
        </contact-information>
        <payroll-information
            v-show="currentStep == 3"
            :saving="saving"
            :data.sync="payrollInformation">
        </payroll-information>
        <system-information
            v-show="currentStep == 4"
            :saving="saving"
            :data.sync="systemInformation">
        </system-information>
        <perk-information
            v-show="currentStep == 5"
            :saving="saving"
            :data.sync="perkInformation">
        </perk-information>
        <small class="text-subtitle-2">*indicates required field</small>
    </v-container>
    <div class="text-right">
        <v-btn text @click="$emit('update:dialog', false)">Close</v-btn>
        <v-btn text @click="storeContractor()">Save</v-btn>
    </div>
</div>
</template>

<script>
import StoreUpdateNav from './StoreUpdateNav'
import PersonalInformation from './PersonalInformation'
import WorkInformation from './WorkInformation'
import ContactInformation from './ContactInformation'
import PayrollInformation from './PayrollInformation'
import SystemInformation from './SystemInformation'
import PerkInformation from './PerkInformation'

export default {
    components: {
        StoreUpdateNav,
        PersonalInformation,
        WorkInformation,
        ContactInformation,
        PayrollInformation,
        SystemInformation,
        PerkInformation
    },
    data () {
        return {
            currentStep: 0,
            saving: false,
            personalInformation: {
                firstName: null,
                middleName: null,
                lastName: null,
                nickname: null,
                nationality: null,
                gender: null,
                dateOfBirth: null,
                maritalStatus: null,
                degree: null,
                program: null
            },
            workInformation: {
                batchNumber: null,
                employmentStatus: null,
                dateStarted: null,
                dateRegularized: null,
                departmentId: null,
                isManager: false,
                directManagerId: null,
                jobTitles: [],
                roles: []
            },
            contactInformation: {
                viEmail: [null, null, null],
                personalEmail: [null, null, null],
                mobileNumber: [null, null, null],
                landlineNumber: null,
                emergencyContactPerson: null,
                emergencyContactNumber: null,
                skype: null,
                facebook: null
            },
            payrollInformation: {
                payoneerId: null,
                bankAccount: null,
                paygrade: null,
                paygradeEffectivityDate: null,
                paymentTerm: null,
                rate: null
            },
            systemInformation: {
                mainIsp: null,
                backupIsp: null,
                internetSpeed: null,
                osProcessor: null,
                ram: null,
                noiseCancellingHeadset: null
            },
            perkInformation: {
                sss: null,
                pagibig: null,
                philhealth: null,
                perks: []
            },
        }
    },
    methods: {
        async storeContractor () {
            this.saving = true
            setTimeout(async () => {
                let data = await Object.assign(
                    this.personalInformation,
                    this.workInformation,
                    this.contactInformation,
                    this.payrollInformation,
                    this.systemInformation,
                    this.perkInformation
                )
                this.saving = false
                this.$emit('store-contractor', data)
            }, 100)
        }
    }
}
</script>

<style scoped>

</style>