<demo>
加载中
</demo>
<template>
    <Button loading>加载中</Button>
    <Button type="primary" loading>加载中</Button>
    <Button type="dashed" loading>加载中</Button>
    <Button type="text" loading>加载中</Button>
    <Button type="link" loading>加载中</Button>
</template>

<script lang="ts">
    import Button from "../../lib/Button.vue";
    export default {
        components: {
            Button
        }
    }
</script>