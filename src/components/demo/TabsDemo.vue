<template>
    <h1>标签页 Tabs</h1>
    <Demo :component="TabsDemo1" />
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import TabsDemo1 from "./tabs/TabsDemo1.vue";

    export default {
        name: "TabsDemo",
        components: {
            Demo
        },
        setup() {
            return { TabsDemo1 }
        }
    }
</script>