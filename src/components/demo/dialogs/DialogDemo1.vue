<demo>
基础用法
</demo>
<template>
    <Button @click="toggle" type="primary">打开对话框</Button>
    <Dialog v-model:visible="dialogVisible" :ok="ok" >
        <template v-slot:content>
                <div>第一行文字</div>
                <div>第二行文字</div>
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
            const dialogVisible = ref(false);
            const toggle = () => {
                dialogVisible.value = !dialogVisible.value;
            }
            const ok = () => {
                console.log("ok");
                return true;
            }
            return {dialogVisible, toggle, ok};
        }
    }
</script>