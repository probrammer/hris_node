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
import PerkService from '@/services/PerkService'

export default {
    props: {
        saving: false
    },
    data () {
        return {
            perks: [],
            data: {
                sss: null,
                pagibig: null,
                philhealth: null,
                perks: []
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
        const perks = (await PerkService.index()).data
        perks.map((v) => {
            this.perks.push({text: v.title, value: v.id})
        })
    }
}
</script>

<style scoped>

</style>