<demo>
级别
</demo>
<template>
    <Button type="primary">默认</Button>
    <Button type="primary" level="success">成功</Button>
    <Button type="primary" level="warning">警告</Button>
    <Button type="primary" level="danger">失败</Button>                                                                                                                                                                                              
</template>

<script lang="ts">
    import Button from "../../lib/Button.vue";
    export default {
        components: {
            Button
        }
    }
</script>