<template>
    <v-menu
        offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                fab
                :color="color"
                :dark="isDark"
                :class="btnClass"
                v-bind="attrs"
                v-on="on">
                <v-icon>{{ icon }}</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="$emit('update:selected', index)">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
export default {
    props: {
        color: null,
        isDark: false,
        icon: null,
        btnClass: null,
        items: null,
        selected: 0,
    },
    // data () {
    //     return {
    //         selected: 0
    //     }
    // }
}
</script>

<style scoped>

</style>