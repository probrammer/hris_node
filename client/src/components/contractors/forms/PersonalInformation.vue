<template>
<div>
    <v-row>
        <v-col cols="12" sm="6" md="3">
            <v-text-field 
                label="First name*"
                required>
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-text-field 
                label="Middle name"
                hint="Leave blank if no middle name">
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-text-field
                label="Last name*"
                required>
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-text-field
                label="Nickname*"
                required>
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="3">
            <v-text-field
                label="Nationality*"
                required>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="3">
            <v-select
                label="Gender*"
                :items="['Male', 'Female']"
                required>
            </v-select>
        </v-col>
        <v-col cols="12" md="3">
            <v-text-field
                label="Date of Birth*"
                hint="Use mm/dd/yyyy format"
                persistent-hint
                required>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="3">
            <v-select
                label="Marital Status*"
                :items="['Single', 'Married', 'Widowed', 'Divorced']"
                required>
            </v-select>
        </v-col>
        <v-col cols="12" md="6">
            <v-select
                label="Educational Attainment*"
                :items="['College Graduate', 'Vocational Graduate' ,'College Undergraduate', 'Highschool Graduate', 'Elementary Graduate']"
                required>
            </v-select>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field
                label="Degree Program"
                hint="Start with BS/BA/etc"
                persistent-hint
                required>
            </v-text-field>
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