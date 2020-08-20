<template>
<div>
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
</template>

<script>
export default {
    props: {
        saving: false
    },
    data () {
        return {
            data: {
                payoneerId: null,
                bankAccount: null,
                paygrade: null,
                paygradeEffectivityDate: null,
                paymentTerm: null,
                rate: null
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