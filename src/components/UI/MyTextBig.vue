<template>
    <p class="text text-no-wrap" :class="color">{{ text }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "my-text-big",
    props: {
        text: {
            type: String,
            default: () => "",
        },
    },
    data: () => ({}),
    computed: {
        color() {
            if (["available", "stable", "active"].includes(this.text.toLowerCase())) {
                return "success";
            }

            if (["canceled"].includes(this.text.toLowerCase())) {
                return "danger";
            }

            if (["unstable"].includes(this.text.toLowerCase())) {
                return "warning";
            }

            return "secondary";
        },
    },
});
</script>

<style scoped>
.text {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
}

@media screen and (min-width: 1920px) {
    .text {
        font-size: 30px;
    }
}

.success {
    color: #20ce70;
}

.danger {
    color: #ef5858;
}

.warning {
    color: #ec7a2a;
}

.secondary {
    background: linear-gradient(
        180deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 125.64%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>