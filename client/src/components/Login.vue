<template>
    <main-app>
        <h2>HRIS v2</h2>
        <v-container>
            <v-row>
                <v-col
                    md="4"
                    offset-md="4">
                    <v-text-field
                        label="Email"
                        clearable
                        autocomplete="off"
                        v-model="email">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    md="4"
                    offset-md="4">
                    <v-text-field
                        label="Password"
                        :type="'password'"
                        clearable
                        v-model="password">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    md="4"
                    offset-md="4">
                    <v-btn 
                        small
                        @click="login()">
                        Login
                    </v-btn>
                </v-col>
            </v-row>

            {{error}}
        </v-container>
    </main-app>
</template>

<script>
import MainApp from './layouts/MainApp'
import AuthenticationService from '@/services/AuthenticationService'

export default {
    components: {
        MainApp
    },
    data () {
        return {
            error: null,

            show1: false,
            show2: true,
            show3: false,
            show4: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match')
            },
            email: null,
            password: null
        }
    },
    methods: {
        async login () {
            try {
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                })
                // setting state value test
                this.$store.dispatch('setEmail', this.email)
            } catch (err) {
                this.error = err
            }
        }
    }
}
</script>

<style scoped>
</style>
