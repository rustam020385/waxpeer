<template>
    <v-container fluid class="wrapper">
        <img src="/icons/log/Logo.svg" alt="" class="pb-8" />

        <ItemsList :items="items" />
    </v-container>
</template>

<script lang="ts">
import ItemsList from "./components/ItemsList.vue";

import moment from "moment";

import { defineComponent } from "vue";

const date = new Date();

export default defineComponent({
    components: {
        ItemsList,
    },
    data: () => ({
        items: [
            {
                title: "Uptime",
                subtitle: "Uptime over the past 24 hours",
                text: [{ title: "97.83%", subtitle: "" }],
                icon: "eject",
            },
            {
                title: "Waxpeer online & status",
                subtitle: "",
                text: [
                    { title: "12698", subtitle: "extension" },
                    { title: "5898", subtitle: "desktop" },
                    { title: "26697", subtitle: "mobile" },
                ],
                icon: "",
            },
            {
                title: "Current date",
                subtitle: "Current date and time",
                text: [
                    { title: moment(date).format("DD.MM.YYYY"), subtitle: "" },
                ],
                icon: "eject",
            },
            {
                title: "Withdrawal status",
                subtitle: "Connected cryptocurrencies",
                text: [],
                icon: "btc",
            },
            {
                title: "Buy items",
                subtitle: "Time from the last purchase",
                text: [{ title: "25 sec", subtitle: "" }],
                icon: "usd",
            },
            {
                title: "Waxpeer pay bots",
                subtitle: "The number of avaliable bots on Wxpeer pay",
                text: [{ title: "259 bots", subtitle: "" }],
                icon: "arrows",
            },
            {
                title: "Waxpeer pay",
                subtitle: "The last successful trade",
                text: [{ title: "10 sec", subtitle: "" }],
                icon: "pay",
            },
            {
                title: "Availability of a site",
                subtitle: "The availability of the home page of the site",
                text: [{ title: "available", subtitle: "" }],
                icon: "square",
            },
            {
                title: "Server status",
                subtitle: "The status of the website servers",
                text: [{ title: "unstable", subtitle: "" }],
                icon: "cloud",
            },
            {
                title: "Steam Web API",
                subtitle: "Last check June 3, 2022 02:50:16",
                text: [{ title: "stable", subtitle: "" }],
                icon: "steam",
            },
            {
                title: "API response",
                subtitle: "Last request 10 seconds ago",
                text: [{ title: "2.856 ms", subtitle: "" }],
                icon: "settings",
            },
            {
                title: "Last trade",
                subtitle: "The last trade was created 5s ago",
                text: [{ title: "canceled", subtitle: "" }],
                icon: "cart",
            },
            {
                title: "Login",
                subtitle: "Shows either your login is working or not",
                text: [{ title: "active", subtitle: "" }],
                icon: "user",
            },
        ],
    }),
});
</script>

<style scoped>
.wrapper {
    min-height: 100vh;
    padding: 40px 20px;
}

@media screen and (min-width: 1280px) {
    .wrapper {
        padding: 40px;
    }
}
</style>