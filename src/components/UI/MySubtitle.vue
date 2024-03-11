<template>
    <p class="subtitle">{{ text }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'my-subtitle',
    props: {
        text: {
            type: String,
            default: () => '',
        },
    },
});
</script>

<style scoped>
.subtitle {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    color: #babac280;
}
</style>