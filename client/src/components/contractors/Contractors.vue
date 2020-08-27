<template>
    <main-app>
        <slot>
            <v-container fluid>
                <contractors-table
                    :data="contractors"
                    @store-contractor="showStoreDialog = true"
                    @update-contractor="getContractorData($event)">
                </contractors-table>
                <store-update-dialog
                    :departmentOpt="departments"
                    :jobTitleOpt="jobTitles"
                    :perkOpt="perks"
                    :managerOpt="managers"
                    title="Add Contractor"
                    :dialog.sync="showStoreDialog"
                    @save-changes="storeContractor($event)">
                </store-update-dialog>
                <store-update-dialog
                    :departmentOpt="departments"
                    :jobTitleOpt="jobTitles"
                    :perkOpt="perks"
                    :managerOpt="managers"
                    title="Edit Contractor"
                    :contractorData="dataToUpdate"
                    :dialog.sync="showUpdateDialog"
                    @save-changes="updateContractor($event)">
                </store-update-dialog>
            </v-container>
        </slot>
    </main-app>
</template>

<script>
import MainApp from '../layouts/MainApp'
import StoreUpdateDialog from './dialogs/StoreUpdateDialog'
import ContractorsTable from './ContractorsTable'

import ContractorService from '@/services/ContractorService'
import DepartmentService from '@/services/DepartmentService'
import JobTitleService from '@/services/JobTitleService'
import PerkService from '@/services/PerkService'

export default {
    components: {
        MainApp, StoreUpdateDialog, ContractorsTable
    },
    data () {
        return {
            // dialog
            departments: [],
            jobTitles: [],
            perks: [],
            managers: [],
            showUpdateDialog: false,
            showStoreDialog: false,
            dataToUpdate: null,

            //table
            contractors: [],
        }
    },
    methods: {
        async getContractorData (id) {
            this.dataToUpdate = (await ContractorService.show(id)).data
            console.log(this.dataToUpdate)
            this.showUpdateDialog = !this.showUpdateDialog
        },
        async storeContractor (data) {
            console.log(data)
            const storedContractor = (await ContractorService.store(data)).data
            console.log(storedContractor)
        },
        async updateContractor (data) {
            console.log(data)
            const updatedContractor = (await ContractorService.update(data.id, data)).data
            console.log(updatedContractor)
        }
    },
    async created () {
        // dialog options
        let departments = (await DepartmentService.index()).data
        let jobTitles = (await JobTitleService.index()).data
        let perks = (await PerkService.index()).data
        let managers = (await ContractorService.getManagers()).data
        
        departments.map((v) => {
            this.departments.push({text: v.title, value: v.id})
        })
        jobTitles.map((v) => {
            this.jobTitles.push({text: v.title, value: v.id})
        })
        perks.map((v) => {
            this.perks.push({text: v.title, value: v.id})
        })
        managers.map((v) => {
            this.managers.push({text: v.firstName + ' ' + v.lastName, value: v.id})
        })

        // table data
        this.contractors = (await ContractorService.index()).data
    }
}
</script>

<style scoped>

</style>