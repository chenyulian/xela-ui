<template>
    <h1>选择 Select</h1>
    <Demo :component="SelectDemo1" />
    <Demo :component="SelectDemo2" />
   
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import SelectDemo1 from "./select/SelectDemo1.vue";
import SelectDemo2 from "./select/SelectDemo2.vue";
export default {
    components: {
        Demo
    },
    setup() {
        return { SelectDemo1, SelectDemo2 };
    }
}
</script>
<style lang="scss">
    .select-container {
        width: 50%;
    }
</style>