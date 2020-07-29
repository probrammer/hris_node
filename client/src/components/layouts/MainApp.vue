<template>
    <v-app>
        <v-main class="main-body">
            <v-container fluid>
                <!-- Sidebar -->
                <sidebar></sidebar>

                <!-- Content goes here -->
                <div class="pl-14"> <!-- added 56px padding left (sidebar min-width: 56px) -->
                    <slot>
                        <h1 style="border: 1px solid red">Oops! No content found</h1>
                    </slot>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Sidebar from './Sidebar'
export default {
    components: {
        Sidebar
    }
}
</script>

<style scoped>
.main-body{
    background-color: #f6f6f6
}
</style>
