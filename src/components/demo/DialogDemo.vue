<template>
    <h1>Dialog组件</h1>
    <p>使用Toggle按钮打开Dialog。</p>
    <Button @click="toggle" >Toggle</Button>
    <Dialog v-model:visible="dialogVisible" :ok="ok" >
        <template v-slot:content>
                <div>aaaa</div>
                <div>bbbb</div>
                <div>cccc</div>
        </template>
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
    </Dialog>
    <p>使用closeOnClickOverlay属性禁用点击遮罩层关闭对话框。</p>
    <Dialog :visible="false" :closeOnClickOverlay="false" />
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

        const ok = () => {
            // do something
            return true;
        }

        const cancel = () => {

        }

        return {dialogVisible, toggle, ok};
    }
}
</script>
<style lang="scss">
    
</style>