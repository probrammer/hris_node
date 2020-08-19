<template>
<div>
    <v-row>
        <v-col cols="12" sm="6" md="3">
            <v-text-field
                label="Batch Number*"
                required>
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-select
                label="Employment Status*"
                :items="['Probationary', 'Full-Time Contractor']"
                required>
            </v-select>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-text-field
                label="Date Started*"
                hint="Use mm/dd/yyyy format"
                persistent-hint
                required>
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-text-field
                label="Date Regularized*"
                hint="Use mm/dd/yyyy format"
                persistent-hint
                required>
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" md="3">
            <v-select
                label="Department*"
                :items="['Admin', 'HR', 'LSS', 'TSS', 'VSS', 'Sales/Marketing', 'Owners']"
                required>
            </v-select>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-select
                label="Direct Manager*"
                :items="['Robin Regodon', 'Mae Fong', 'Dame Dolla', 'Steph Curry', 'LeBron James']"
                required>
            </v-select>
        </v-col>
        <v-col cols="12" sm="12" md="6">
            <v-select
                multiple
                required
                label="Job Titles*"
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']">
            </v-select>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" md="6">
            <v-select
                multiple
                label="Role*"
                :items="['Administrator', 'HR Manager', 'Operations Manager','Payroll', 'Guest']"
                required>
            </v-select>
        </v-col>
        <v-col cols="12" sm="6" md="6">
            <v-switch class="mx-2" label="People Manager"></v-switch>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>