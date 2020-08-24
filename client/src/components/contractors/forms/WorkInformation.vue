<template>
<div>
    <v-row>
        <v-col cols="12" sm="6" md="3">
            <v-text-field
                required
                label="Batch Number*"
                v-model="data.batchNumber">
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-select
                required
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
                required
                persistent-hint
                label="Date Regularized*"
                hint="Use mm/dd/yyyy format"
                v-model="data.dateRegularized">
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" md="3">
            <v-select
                required
                label="Department*"
                :items="departments"
                v-model="data.departmentId">
            </v-select>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-select
                required
                label="Direct Manager*"
                :items="[1, 2, 3, 4, 5]"
                v-model="data.directManagerId">
            </v-select>
        </v-col>
        <v-col cols="12" sm="12" md="6">
            <v-select
                multiple
                required
                label="Job Titles*"
                :items="jobTitles"
                v-model="data.jobTitles">
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
</template>

<script>
import DepartmentService from '@/services/DepartmentService'
import JobTitleService from '@/services/JobTitleService'

export default {
    props: {
        saving: false
    },
    data () {
        return {
            departments: [],
            jobTitles: [],
            data: {
                batchNumber: null,
                employmentStatus: null,
                dateStarted: null,
                dateRegularized: null,
                departmentId: null,
                isManager: false,
                directManagerId: null,
                jobTitles: [],
                roles: []
            }
        }
    },
    watch: {
        saving: {
            handler (val) {
                if (val) {
                    this.$emit('update:data', this.data)
                }
            }
        }
    },
    async created () {
        const departments = (await DepartmentService.index()).data
        const jobTitles = (await JobTitleService.index()).data
        departments.map((v) => {
            this.departments.push({text: v.title, value: v.id})
        })
        jobTitles.map((v) => {
            this.jobTitles.push({text: v.title, value: v.id})
        })
        
    }
    
}
</script>

<style scoped>

</style>