<template>
    <h1>Select组件</h1>
    <h2>示例一</h2>
    <div class="select-container">
         <Select v-model:value="value" :options="options">
        {{value}}
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
        const value = ref(null);
        const options = [
            {label: "选项1", value: "op1"},
            {label: "选项2222222222222", value: "op2"},
            {label: "选项3", value: "op3"},
        ];
        return {value, options}
    }
}
</script>
<style lang="scss">
    .select-container {
        width: 50%;
    }
</style>