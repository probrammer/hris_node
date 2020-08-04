<template>
    <v-row>
        <v-col md="2">
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
        <v-col md="2">
            <v-select 
                class="filter-option"
                dense
                solo
                color="red darken-1"
                :items="options.months"
                label="No month selected"
                v-model="month"
                @change="$emit('set-month', month)">
            </v-select>
        </v-col>
        <v-col class="text-right" md="2">
            <v-btn text color="red darken-2" height="40px">
                Clear Filter
            </v-btn>
        </v-col>
        <v-col class="text-right" md="3" offset-md="3">
            <v-btn dark color="blue darken-4">
                Export
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
    methods: {
        sendFilter () {
            this.$emit('send-filter', this.year)
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