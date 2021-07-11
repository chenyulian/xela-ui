<template>
    <h1>Dialog组件</h1>
    <h2>示例一</h2>
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
    <h2>示例二</h2>
    <p>使用closeOnClickOverlay属性禁用点击遮罩层关闭对话框。</p>
    <Dialog :visible="false" :closeOnClickOverlay="false" />
    <h2>示例三</h2>
    <p>使用openDialog方法创建对话框。</p>
    <Button @click="open">创建对话框</Button>
</template>
<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../../lib/openDialog";
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

        const open = () => {
            openDialog({
                title: "测试标题",
                content: "测试内容",
                ok: () => {
                    return true;
                },
                cancel: () => {
                    
                }
            });
        }

        return {dialogVisible, toggle, ok, open};
    }
}
</script>
<style lang="scss">
    
</style>