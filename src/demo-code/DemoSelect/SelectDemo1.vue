<demo>
基础用法
</demo>
<template>
    <Select v-model:value="value" :options="options" />
</template>

<script lang="ts">
    import { ref } from "vue";
    import Select from "../../lib/Select.vue";
    export default {
        components: { Select },
        setup() {
            const value = ref("");
            const options = [
                {label: "选项1", value: "op1"},
                {label: "选项2", value: "op2"},
                {label: "选项3", value: "op3"},
                {label: "选项4", value: "op4"},
                {label: "选项5", value: "op5"},
                {label: "选项6", value: "op6"},
                {label: "选项7", value: "op7"},
            ];
            return {value, options};
        }
    }
</script>