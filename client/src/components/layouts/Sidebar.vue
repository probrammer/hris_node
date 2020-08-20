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
                dense
                class="text-left">
                <v-list-item link :to="'/dashboard'"> <!-- :to = redirect -->
                    <v-list-item-icon>
                        <v-icon>
                            mdi-chart-bar
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="'/contractors'"> <!-- :to = redirect -->
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
                <v-list-group
                    prepend-icon="mdi-cog">
                    <template v-slot:activator>
                        <v-list-item-title>Manage</v-list-item-title>
                    </template>

                    <v-list-item v-for="(child, index) in manage.children" :key="index"
                        link :to="child.link"
                        class="text-center">
                        <v-list-item-title>{{ child.title }}</v-list-item-title>
                        <v-icon>{{ child.icon }}</v-icon>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    data () {
        return {
            manage: {
                children: [
                    {title: 'Departments', icon: 'mdi-graph-outline', link: '/manage/departments'},
                    {title: 'Job Titles', icon: 'mdi-clipboard-account-outline', link: '/manage/job-titles'},
                    {title: 'Perks', icon:'mdi-account-heart-outline', link: '/manage/perks'},
                    {title: 'Roles', icon: 'mdi-card-account-details-outline', link: '/manage/roles'},
                ]
            }
        }
    }
}
</script>

<style scoped>
</style>
