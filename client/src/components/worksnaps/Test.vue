<template>
    <main-app>
        <slot>
            <v-container fluid>
                <v-row>
                    <v-col>
                        <h1>Hello</h1>
                    </v-col>
                </v-row>
            </v-container>
        </slot>
    </main-app>
</template>

<script>
import MainApp from '../layouts/MainApp'

import WorksnapsService from '@/services/WorksnapsService'

export default {
    components: {
        MainApp
    },
    async mounted () {
        await WorksnapsService.index()
    }
}
</script>

<style scoped>

</style>