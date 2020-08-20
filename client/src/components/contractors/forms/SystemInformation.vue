<template>
<div>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <v-text-field
                label="Main ISP"
                v-model="data.mainIsp">
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <v-text-field
                label="Backup ISP"
                v-model="data.backupIsp">
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <v-select
                label="Internet Speed"
                :items="['5-10mbps', '11-15mbps', '16-20mbps', '21-25mbps', '> 25mbps']"
                v-model="data.internetSpeed">
            </v-select>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <v-text-field
                label="OS and Processor"
                v-model="data.osProcessor">
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <v-select
                label="RAM"
                :items="['4gb', '8gb', '12gb', '16gb', '20gb', '24gb', '28gb', '32gb']"
                v-model="data.ram">
            </v-select>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <v-select
                label="Noise Cancelling Headset?"
                :items="['Yes', 'No']"
                v-model="data.noiseCancellingHeadset">
            </v-select>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    props: {
        saving: false
    },
    data () {
        return {
            data: {
                mainIsp: null,
                backupIsp: null,
                internetSpeed: null,
                osProcessor: null,
                ram: null,
                noiseCancellingHeadset: null
            }
        }
    },
    watch: {
        saving: {
            handler (val) {
                if (val) {
                    this.$emit('update:data', this.data)
                }
            }
        }
    }
}
</script>

<style scoped>

</style>