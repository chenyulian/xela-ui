<template>
    <h1>对话框 Dialog</h1>
    <Demo :component="DialogDemo1" />
    <Demo :component="DialogDemo2" />
    <Demo :component="DialogDemo3" />
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import DialogDemo1 from "../../demo-code/DemoDialog/DialogDemo1.vue";
import DialogDemo2 from "../../demo-code/DemoDialog/DialogDemo2.vue";
import DialogDemo3 from "../../demo-code/DemoDialog/DialogDemo3.vue";
export default {
    components: {
        Demo
    },
    setup() {
        return { DialogDemo1, DialogDemo2, DialogDemo3 };
    }
}
</script>
<style lang="scss">
    
</style>