<template>
    <div id="main"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as echarts from "echarts";

export default defineComponent({
    mounted() {
        this.initialize();
    },
    methods: {
        initialize() {
            var chartDom = document.getElementById("main");
            var myChart = echarts.init(chartDom, {
                dark: true,
                backgroundColor: "transparent",
            });
            var option;

            option = {
                grid: [
                    {
                        left: -5,
                        right: -5,
                    },
                ],
                xAxis: {
                    type: "category",
                    data: [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                        "Sun",
                    ],
                    show: false,
                },
                yAxis: {
                    type: "value",
                    show: false,
                    max: 130,
                },
                series: [
                    {
                        data: [
                            60, 65, 75, 90, 100, 98, 90, 60, 66, 75, 80, 100,
                            98, 90, 60, 65, 75, 90, 100, 98, 90, 60, 66, 75, 80,
                            100, 98, 90,
                        ],
                        type: "line",
                        symbolSize: 0,
                        color: "#babac280",
                        smooth: true,
                        areaStyle: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(255, 255, 255, 0.1)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(255, 255, 255, 0)",
                                    },
                                ],
                            },
                        },
                    },
                ],
            };

            option && myChart.setOption(option);

            window.addEventListener('resize', () => {
                this.window = window.innerWidth

                myChart.resize()
            })
        },
    },
});
</script>

<style scoped>
#main {
    height: 56px;    
    width: 30%;
}

@media screen and (min-width: 1920px) {
    #main {
        width: 172px;
    }
}
</style>