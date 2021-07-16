<template>
    <h1>Input组件</h1>
    <Demo :component="InputDemo1" />
    <Demo :component="InputDemo2" />
    <Demo :component="InputDemo3" />
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import InputDemo1 from "../../demo-code/DemoInput/InputDemo1.vue";
import InputDemo2 from "../../demo-code/DemoInput/InputDemo2.vue";
import InputDemo3 from "../../demo-code/DemoInput/InputDemo3.vue";
export default {
    name: "InputDemo",
    components: {
        Demo
    },
    setup() {
        return  { InputDemo1, InputDemo2, InputDemo3 };
    }
}
</script>
<style lang="scss">
    
</style>