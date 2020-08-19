<template>
    <div>
        <v-navigation-drawer
            permanent
            expand-on-hover
            fixed>
            <v-list>
                <v-list-item 
                    class="px-2"
                    link>
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title">Sandra Adams</v-list-item-title>
                        <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            
            <v-divider></v-divider>

            <v-list
                nav
                dense>
                <v-list-item link :to="'/dashboard'"> <!-- :to = redirect -->
                    <v-list-item-icon>
                        <v-icon>
                            mdi-chart-bar
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="'/contractors'">
                    <v-list-item-icon>
                        <v-icon>
                            mdi-account-group
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Contractors</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>
                            mdi-calendar-multiselect
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Leaves</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
