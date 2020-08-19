<template>
    <v-row>
        <v-col
            v-for="(step, index) in steps"
            :key="index"
            cols="12"
            md="2">
            <v-btn
                fab
                small
                class="elevation-2"
                :dark="currentStep == index ? true : false"
                :color="currentStep == index ? 'blue darken-3' : ''"
                @click="currentStep = index">
            <v-icon>{{ step.icon }}</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data () {
        return {
            steps: [
                { icon: 'mdi-account' },
                { icon: 'mdi-briefcase' },
                { icon: 'mdi-cellphone' },
                { icon: 'mdi-cash' },
                { icon: 'mdi-desktop-tower-monitor' },
                { icon: 'mdi-card-account-details' },
            ],
            currentStep: 0
        }
    }
}
</script>

<style scoped>

</style>