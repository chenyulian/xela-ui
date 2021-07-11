<template>
    <h1>Dialog组件</h1>
    <p>使用Toggle按钮打开Dialog。</p>
    <Button @click="toggle">Toggle</Button>
    <Dialog v-model:visible="dialogVisible" />
</template>
<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import { ref } from "vue";
export default {
    components: {
        Dialog, Button
    },
    setup() {
        const dialogVisible = ref(false);
        const toggle = () => {
            dialogVisible.value = !dialogVisible.value;
        }

        return {dialogVisible, toggle};
    }
}
</script>
<style lang="scss">
    
</style>