<template>
<div>
    <v-row>
        <v-col cols="12" sm="6" md="3">
            <v-text-field
                required
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
                required
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
                required
                label="Nationality*"
                v-model="data.nationality">
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-select
                required
                label="Gender*"
                :items="['Male', 'Female']"
                v-model="data.gender">
            </v-select>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-text-field
                required
                persistent-hint
                label="Date of Birth*"
                hint="Use mm/dd/yyyy format"
                v-model="data.dateOfBirth">
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
            <v-select
                required
                label="Marital Status*"
                :items="['Single', 'Married', 'Widowed', 'Divorced']"
                v-model="data.maritalStatus">
            </v-select>
        </v-col>
        <v-col cols="12" md="6">
            <v-select
                required
                label="Educational Attainment*"
                :items="['College Graduate', 'Vocational Graduate' ,'College Undergraduate', 'Highschool Graduate', 'Elementary Graduate']"
                v-model="data.degree">
            </v-select>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field
                required
                persistent-hint
                label="Degree Program"
                hint="Start with BS/BA/etc"
                v-model="data.program">
            </v-text-field>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    props: {
        saving: false
    },
    data () {
        return {
            data: {
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
    }
}
</script>

<style scoped>

</style>