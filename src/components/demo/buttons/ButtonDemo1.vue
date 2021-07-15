<demo>
基础用法
</demo>
<template>
    <Button>默认按钮</Button>
    <Button type="primary">基础按钮</Button>
    <Button type="dashed">虚线按钮</Button>
    <Button type="text">文本按钮</Button>
    <Button type="link">链接按钮</Button>
</template>

<script lang="ts">
    import Button from "../../../lib/Button.vue";
    export default {
        components: { Button }
    }
</script>