<template>
    <v-row class="py-0 w-100" justify="end">
        <v-col cols="auto" class="py-0" v-for="item in list" :key="item">
            <img :src="`/icons/subtracts/${item}.svg`" alt="">
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {  
        return {
            list: ['Subtract', 'Subtract2', 'Subtract3']
        }
    }
})
</script>

<style scoped>

</style>