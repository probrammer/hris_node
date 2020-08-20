<template>
<div>
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
                :items="perks"
                v-model="data.perks">
            </v-select>
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
            perks: [
                'OT Pay',
                'Internet Subsidy',
                'Birthday Bonus',
                'Birthday Leave',
                'Anniversary Bonus',
                'Pagibig Subsidy',
                'HMO Emergency',
                'Performance Incentive',
                'Referral Bonus'
            ],
            data: {
                sss: null,
                pagibig: null,
                philhealth: null,
                perks: null
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