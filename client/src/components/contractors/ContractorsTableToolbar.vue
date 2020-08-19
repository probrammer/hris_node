<template>
    <v-row align="center">
        <v-col
            cols="12"
            md="3">
            <v-text-field
                solo
                label="Search user"
                prepend-inner-icon="mdi-magnify"
                class="textfield-solo"
                v-model="table.search">
            </v-text-field>
        </v-col>
        <v-col
            cols="12"
            md="6"
            offset-md="3"
            class="text-right">
            <!-- account details btn -->
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
                        v-for="(detail, index) in table.details"
                        :key="index"
                        @click="$emit('details-selected', index)">
                        <v-list-item-title>{{ detail }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <!-- file export btn -->
            <v-btn
                fab
                dark
                class="mr-2">
                <v-icon>mdi-file-export</v-icon>
            </v-btn>
            <!-- open store/update form btn -->
            <v-dialog  
                persistent
                scrollable
                max-width="600px"
                v-model="form.dialog">
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
                            :dialog.sync="form.dialog"
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
            // table
            table: {
                details: [
                    'Personal Info',
                    'Work Info',
                    'Contact Info',
                    'Payroll Info',
                    'System Info',
                    'SSS/Pagibig/Philhealth'
                ],
                search: ''
            },

            // store-update-form
            form: {
                dialog: false
            }
        }
    }
}
</script>

<style scoped>
.textfield-solo {
    max-height: 50px;
}
</style>