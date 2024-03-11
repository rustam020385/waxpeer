<template>
    <h4 class="title">{{ text }}</h4>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'my-title',
    props: {
        text: {
            type: String,
            default: () => '',
        },
    },
});
</script>

<style scoped>
.title {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    color: #fff;
    margin-bottom: 5px;
}
</style>