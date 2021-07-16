<demo>
禁用选择器
</demo>
<template>
    <Select v-model:value="value" :options="options" disabled />
</template>

<script lang="ts">
    import { ref } from "vue";
    import Select from "../../lib/Select.vue";
    export default {
        components: { Select },
        setup() {
            const value = ref("op1");
            const options = [
                {label: "选项1", value: "op1"},
                {label: "选项2", value: "op2"},
            ];
            return {value, options};
        }
    }
</script>