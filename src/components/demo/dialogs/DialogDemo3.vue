<demo>
禁用点击遮罩层关闭对话框
</demo>
<template>
    <Button @click="visible= !visible" type="primary">打开对话框</Button>
    <Dialog v-model:visible="visible" :ok="ok" :closeOnClickOverlay="false">
        <template v-slot:content>
                <div>对话框内容</div>
        </template>
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
    </Dialog>
</template>

<script lang="ts">
    import { ref } from "vue";
    import Button from "../../../lib/Button.vue";
    import Dialog from "../../../lib/Dialog.vue";
    export default {
        components: { Button, Dialog },
        setup() {
            const visible = ref(false);
            const ok = () => {
                // do something
                return true;
            }
            return {visible, ok};
        }
    }
</script>