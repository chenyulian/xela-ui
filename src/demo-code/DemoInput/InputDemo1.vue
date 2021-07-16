<demo>
基础用法
</demo>
<template>
    <Input v-model:value="value" />
    <span>value: {{value}}</span>
</template>

<script lang="ts">
    import { ref } from "vue";
    import Input from "../../lib/Input.vue";
    export default {
        components: { Input },
        setup() {
            const value = ref("");
            return  {value};
        }
    }
</script>