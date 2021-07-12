<template>
    <h1>Tabs组件</h1>
    <h2>示例一</h2>
    <Tabs v-model:selected="selectedTag">
        <Tab title="导航11111111111" name="tab1">内容1</Tab>
        <Tab title="导航2222222222" name="tab2">内容2</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import { ref } from "vue";

    export default {
        name: "TabsDemo",
        components: {
            Tabs, Tab
        },
        setup() {
            const selectedTag = ref("tab2");
            return {selectedTag}
        }
    }
</script>

<style lang="scss" scoped>

</style>