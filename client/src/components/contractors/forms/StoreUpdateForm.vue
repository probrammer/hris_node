<template>
<div>
    <v-container>
        <store-update-nav></store-update-nav>
        <!-- <personal-information></personal-information> -->
        <!-- <work-information></work-information> -->
        <!-- <contact-information></contact-information> -->
    </v-container>
    <!-- <small>*indicates required field</small> -->
    <div class="text-right">
        <v-btn text @click="$emit('update:dialog', false)">Close</v-btn>
        <v-btn text @click="storeContractor()">Save</v-btn>
    </div>
</div>
</template>

<script>
import StoreUpdateNav from './StoreUpdateNav'
import PersonalInformation from './PersonalInformation'
import WorkInformation from './WorkInformation'
import ContactInformation from './ContactInformation'

export default {
    components: {
        StoreUpdateNav, PersonalInformation, WorkInformation, ContactInformation
    },
    data () {
        return {
            data: {
                meme: 'true',
                name: 'Robin'
            }
        }
    },
    methods: {
        storeContractor () {
            this.$emit('store-contractor', this.data)
            this.$emit('update:dialog', false)
        }
    }
}
</script>

<style scoped>

</style>