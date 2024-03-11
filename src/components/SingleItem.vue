<template>
    <div
        class="card-item h-100"
        :class="{
            'card-item-colored': item.title != 'Waxpeer online & status',
            'card-item-big': item.title == 'Waxpeer online & status'
        }"
    >
        <div class="d-flex flex-column justify-space-between h-100">
            <div>
                <my-title :text="item.title"></my-title>
                <my-subtitle :text="item.subtitle"></my-subtitle>
            </div>

            <div class="d-flex justify-end align-center" :class="item.text.length > 1 ? 'mt-8': ''">
                <div class="pl-3" v-if="item.text.length">
                    <v-row align="end" class="mt-xl-0">
                        <v-col
                            v-for="(text, index) in item.text"
                            :key="text"
                            cols="12"
                            md="6"
                            xl="auto"
                            class="py-0 px-0"
                        >
                            <div v-if="item.icon" class="icon">
                                <img :src="`/icons/${item.icon}/icon.svg`" alt="">
                            </div>
                            <div class="d-flex">
                                <span v-if="index != 0" class="divider d-none d-xl-block"></span>
                                <div
                                    :class="{
                                        'pr-xl-8': index < item.text.length - 1,
                                        'pl-xl-8': index != 0,
                                    }"
                                >
                                    <my-text-big
                                        :text="text.title"
                                        :class="
                                            item.text.length > 1 ? 'mb-4' : ''
                                        "
                                    ></my-text-big>
                                    <my-subtitle
                                        :text="text.subtitle"
                                    ></my-subtitle>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>

                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
});
</script>

<style scoped>
.card-item {
    padding: 1rem 1.5rem 2rem 4rem;
    border-radius: 8px;
    position: relative;
    min-height: 200px;
}

.card-item-big {
    padding: 1rem 1.5rem 2rem 1.5rem;
}

.card-item-colored {
    background: #212121;
}

.divider {
    
    width: 3px;
    background-color: #babac280;
    border-radius: 10px;
}

.icon {
    position: absolute;
    left: 1rem;
    top: 1rem;
}
</style>