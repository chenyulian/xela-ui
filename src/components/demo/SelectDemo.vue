<template>
    <h1>Select组件</h1>
    <h2>示例一</h2>
    <div class="select-container">
         <Select v-model:value="value" :options="options" />
         <Select v-model:value="value" placeholder="请选择一个项目" :options="options" disabled />
        value:{{value}}
    </div>
   
</template>
<script lang="ts">
import Select from "../../lib/Select.vue";
import { ref } from "vue";

export default {
    components: {
        Select
    },
    setup() {
        const value = ref("");
        const options = [
            {label: "选项1", value: "op1"},
            {label: "选项2222222222222", value: "op2"},
            {label: "选项3", value: "op3"},
            {label: "选项4", value: "op4"},
            {label: "选项5", value: "op5"},
            {label: "选项6", value: "op6"},
            {label: "选项7", value: "op7"},
        ];
        
        const xxx = (selectedValue) => {
            console.log(selectedValue)
        }
        return {value, options, xxx}
    }
}
</script>
<style lang="scss">
    .select-container {
        width: 50%;
    }
</style>