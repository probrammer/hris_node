<template>
    <v-row 
        align="center">
        <v-col 
            md="2">
            <v-select 
                class="filter-option"
                dense
                solo
                :items="options.years"
                :label="year.toString()"
                v-model="year"
                @change="$emit('set-year', year)">
            </v-select>
        </v-col>
        <v-col 
            md="2">
            <v-select 
                class="filter-option"
                color="red darken-1"
                label="No month selected"
                dense
                solo
                :items="options.months"
                v-model="month"
                @change="$emit('set-month', month)">
            </v-select>
        </v-col>
        <v-col 
            class="text-right"
            md="3"
            offset-md="5">
            <v-btn
                color="blue darken-3"
                fab
                dark
                @click="$emit('export-report')">
                <v-icon>
                    mdi-file-export
                </v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data () {
        return {
            options: {
                years: [],
                months: ["December", "November", "October", "September", "August", "July", "June", "May", "April", "March", "February", "January"]
            },
            year: new Date().getFullYear(),
            month: null
        }
    },
    created () {
        let currentYear = new Date().getFullYear()
        for (let x = currentYear; x >= 2012; x--) {
            this.options.years = [...this.options.years, x]
        }
    }
}
</script>

<style scoped>
.filter-option {
    max-height: 32px;
}
</style>