<template>
    <v-row>
        <v-col
            v-for="item in items"
            :key="item.title"
            v-bind="getWidth(item.title)"
            class="px-2 py-2"
        >
            <single-item :item="item">
                <template v-if="isSlot.includes(item.title)" v-slot:content>
                    <template v-if="item.title == 'Uptime'">
                        <MyChart class="ml-auto"/>
                    </template>
                    <template v-else-if="item.title == 'Waxpeer online & status'">
                        <my-sphere class="ml-auto"></my-sphere>
                    </template>
                    <template v-else-if="item.title == 'Current date'">
                        <my-subtitle :text="time" class="ml-auto"></my-subtitle>
                    </template>
                    <template v-else-if="item.title == 'Withdrawal status'">
                        <MySubtracts class="ml-auto" />
                    </template>
                </template>
            </single-item>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SingleItem from "./SingleItem.vue";
import moment from 'moment'
import MyChart from "./MyChart.vue";
import MySphere from "./MySphere.vue";
import MySubtracts from "./MySubtracts.vue";

const date = new Date()

export default defineComponent({
    components: {
        SingleItem,
        MyChart,
        MySphere,
        MySubtracts
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    data: () => ({
        isSlot: [
            "Uptime",
            "Waxpeer online & status",
            "Current date",
            "Withdrawal status",
        ],
    }),
    computed: {
        time() {
            return moment(date).format('HH:mm:ss')
        }
    },
    methods: {
        getWidth(title) {
            if (title == "Waxpeer online & status") {
                return {
                    cols: "12",
                    sm: "12",
                    md: "8",
                    lg: "6",
                };
            }

            return {
                cols: "12",
                sm: "6",
                md: "4",
                lg: "3",
            };
        },
    },
});
</script>

<style scoped>
</style>