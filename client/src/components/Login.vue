<template>
    <main>
        <h1>Robin Regodon</h1>
        <v-container>
            <v-row>
                <v-col
                    md="4"
                    offset-md="4">
                    <v-text-field
                        label="Placeholder"
                        v-model="email">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    md="4"
                    offset-md="4">
                    <v-text-field
                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show3 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Not visible"
                        hint="At least 8 characters"
                        class="input-group--focused"
                        @click:append="show3 = !show3"
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
            {{$store.state.email}}
        </v-container>
    </main>
</template>

<script>
import Main from './layouts/Main'
import AuthenticationService from '@/services/AuthenticationService'

export default {
    components: {
        Main
    },
    data () {
        return {
            show1: false,
            show2: true,
            show3: false,
            show4: false,
            password: 'Password',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match')
            },
            email: '',
            error: null
        }
    },
    methods: {
        async login () {
            try {
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                })

                this.$store.dispatch('setEmail', this.email)
                // this.$router.push('/asd')
            } catch (err) {
                this.error = err
            }
        }
    }
}
</script>

<style scoped>
</style>
