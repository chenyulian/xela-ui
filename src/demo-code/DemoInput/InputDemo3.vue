<demo>
禁用和只读
</demo>
<template>
    <Input v-model:value="text" disabled />
    <Input v-model:value="text" readonly />
</template>

<script lang="ts">
    import { ref } from "vue";
    import Input from "../../lib/Input.vue";
    export default {
        components: { Input },
        setup() {
            const text = ref("测试内容");
            return  {text};
        }
    }
</script>