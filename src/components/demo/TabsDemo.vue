<template>
    <h1>标签页 Tabs</h1>
    <Demo :component="TabsDemo1" />
    <Table :columns="columns" :data="data" />
    <Table title="Slots" :columns="columns2" :data="data2" />
    <Table title="Tab Properties" :columns="columns" :data="data3" />
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Table from "../Table.vue";

import TabsDemo1 from "../../demo-code/DemoTabs/TabsDemo1.vue";

    export default {
        name: "TabsDemo",
        components: {
            Demo,Table
        },
        setup() {
            const columns = {1: "名称", 2: "类型", 3: "可选值", 4: "默认值", 5: "说明"};
            const data = [{name: "selected", type: "`string`", value: "子元素的name，详见Tab Properties", default: "`false`", desc: "选中标签的name"}];
            const columns2 = {1: "名称", 2: "类型", 3: "说明"};
            const data2 = [{name: "Tab", type: "component", desc: "子标签"}];
            const data3 = [{name: "title", type: "`string`", value: "任意字符串", default: "`''`", desc: "Tab标题"},
                           {name: "name", type: "`string`", value: "任意字符串", default: "`''`", desc: "Tab名，用来标识唯一Tab，一组Tabs中每个Tab的name应该是唯一的"}];
            return { TabsDemo1, columns, data, columns2, data2, data3 }
        }
    }
</script>