<template>
    <div>
        <div class="parent">
            <div id="wrap">
                <div class="planet"></div>
                <div class="ring ring-1 top-left"></div>
                <div class="ring ring-2 top-left"></div>
                <div class="ring ring-3 top-left"></div>
                <my-text-big text="Stable" class="text"></my-text-big>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    mounted() {},
});
</script>

<style scoped>
.parent {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -80px;
}

#wrap {
    margin-left: -260px;
    position: relative;
    width: 200px;
    height: 200px;
    z-index: 5;
}

.planet {
    width: 163px;
    height: 163px;
    border-radius: 50%;
    background: rgba(32, 206, 112, 0.1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.ring {
    border-radius: 50%;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    
}

.ring-1 {
    width: 244px;
    height: 85px;
    border: 0.95px solid rgba(32, 119, 72, 0.5);
    transform: translate(-50%, -50%) rotate(-45deg);
}

.ring-2 {
    width: 228px;
    height: 104px;
    border: 0.95px solid rgba(32, 119, 72, 1);
    transform: translate(-50%, -50%) rotate(60deg);
}

.ring-3 {
    width: 284px;
    height: 80px;
    border: 0.95px solid rgba(32, 119, 72, 0.15);
    transform: translate(-50%, -50%) rotate(-160deg);
}

.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
}

@media screen and (min-width: 960px) {
    #wrap {
        margin-left: -260px;
        margin-top: -25px;
    }
}

@media screen and (min-width: 1920px) {
    #wrap {
        margin-top: -40px;
    }

    .parent {
        top: 0;
        margin-top: 40px;
    }
}
</style>