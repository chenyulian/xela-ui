<demo>
使用openDialog方法创建对话框
</demo>
<template>
    <Button @click="open">创建对话框</Button>
</template>

<script lang="ts">
    import { openDialog } from "../../../lib/openDialog";
    import Button from "../../../lib/Button.vue";
    import Dialog from "../../../lib/Dialog.vue";
    export default {
        components: { Button, Dialog },
        setup() {
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
            return { open };
        }
    }
</script>