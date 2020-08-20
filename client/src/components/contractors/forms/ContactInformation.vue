<template>
<div>
    <v-row>
        <v-col cols="12" md="4">
            <v-text-field
                required
                label="VI Email*"
                v-model="data.viEmail[0]">
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field
                label="VI Email 2"
                v-model="data.viEmail[1]">
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field
                label="VI Email 3"
                v-model="data.viEmail[2]">
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="4">
            <v-text-field
                label="Personal Email 1"
                v-model="data.personalEmail[0]">
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field
                label="Personal Email 2"
                v-model="data.personalEmail[1]">
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field
                label="Personal Email 3"
                v-model="data.personalEmail[2]">
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="4">
            <v-text-field
                persistent-hint
                label="Mobile Number"
                hint="Use format +639123456789"
                v-model="data.mobileNumber[0]">
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field
                label="Mobile Number 2"
                v-model="data.mobileNumber[1]">
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field
                label="Mobile Number 3"
                v-model="data.mobileNumber[2]">
            </v-text-field>
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
</template>

<script>
export default {
    props: {
        saving: false
    },
    data () {
        return {
            data: {
                viEmail: [null, null, null],
                personalEmail: [null, null, null],
                mobileNumber: [null, null, null],
                landlineNumber: null,
                emergencyContactPerson: null,
                emergencyContactNumber: null,
                skype: null,
                facebook: null
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