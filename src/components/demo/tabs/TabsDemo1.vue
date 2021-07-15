<demo>
基础用法
</demo>
<template>
    <Tabs v-model:selected="selectedTag">
        <Tab title="导航1" name="tab1">内容1</Tab>
        <Tab title="导航2" name="tab2">内容2</Tab>
    </Tabs>
</template>

<script lang="ts">
    import { ref } from "vue";
    import Tabs from "../../../lib/Tabs.vue";
    import Tab from "../../../lib/Tab.vue";
    export default {
        components: { Tabs, Tab },
        setup() {
            const selectedTag = ref("tab1");
            return {selectedTag}
        }
    }
</script>