<demo>
输入框类型
</demo>
<template>
    <Input v-model:value="text" type="text" />
    <Input v-model:value="password" type="password" />
</template>

<script lang="ts">
    import { ref } from "vue";
    import Input from "../../lib/Input.vue";
    export default {
        components: { Input },
        setup() {
            const text = ref("");
            const password = ref("");
            return  {text, password};
        }
    }
</script>