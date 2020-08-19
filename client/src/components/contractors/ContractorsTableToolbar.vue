<template>
    <v-row align="center">
        <v-col
            md="3">
            <v-text-field
                label="Search user"
                prepend-inner-icon="mdi-account-search">
            </v-text-field>
        </v-col>
        <v-col
            md="6"
            offset-md="3"
            class="text-right">
            <v-menu
                offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        fab
                        dark
                        class="mr-2"
                        v-bind="attrs"
                        v-on="on">
                        <v-icon>mdi-account-details</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(detail, index) in details"
                        :key="index"
                        @click="$emit('details-selected', index)">
                        <v-list-item-title>{{ detail }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn
                fab
                dark
                class="mr-2">
                <v-icon>mdi-file-export</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" persistent scrollable max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        fab
                        dark
                        v-bind="attrs"
                        v-on="on">
                    <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                        <store-update-form
                            :dialog.sync="dialog"
                            @store-contractor="$emit('store-contractor', $event)">
                        </store-update-form>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script>
import StoreUpdateForm from './forms/StoreUpdateForm'

export default {
    components: {
        StoreUpdateForm
    },
    data () {
        return {
            // account details-menu
            details: [
                'Personal Info',
                'Work Info',
                'Contact Info',
                'Payroll Info',
                'System Info',
                'SSS/Pagibig/Philhealth'
            ],

            // store-update-form
            dialog: false
        }
    }
}
</script>

<style scoped>

</style>