<template>
    <h1>选择 Select</h1>
    <Demo :component="SelectDemo1" />
    <Demo :component="SelectDemo2" />
    <Table :columns="columns" :data="data" />
    <Table title="SelectOption Properties" :columns="columns2" :data="data2" />
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import SelectDemo1 from "../../demo-code/DemoSelect/SelectDemo1.vue";
import SelectDemo2 from "../../demo-code/DemoSelect/SelectDemo2.vue";
import Table from "../Table.vue";
export default {
    components: {
        Demo,Table
    },
    setup() {
        const columns = {1: "名称", 2: "类型", 3: "可选值", 4: "默认值", 5: "说明"};
        const data = [{name: "options", type: "`Array<SelectOption>`", value: "`SelectOption`类型数组", default: "`[]`", desc: "选择器的选项内容，详见SelectOption Properties"},
                      {name: "value", type: "`string`", value: "`true / false`", default: "`undefined`", desc: "选中的值"},
                      {name: "disabled", type: "`boolean`", value: "`true / false`", default: "`false`", desc: "是否禁用"},
                      {name: "placeholder", type: "`string`", value: "任意字符串", default: "`''`", desc: "占位符"}];

        const columns2 = {1: "名称", 2: "类型", 3: "说明"};
        const data2 = [{name: "label", type: "`string`", desc: "选项标签，展示在下拉列表中的选项名称。"},
                      {name: "value", type: "`string`", desc: "选项值，用来标识每个选项。每个SelectOption数组中，每个选项的值应该是唯一的。"}];
        return { SelectDemo1, SelectDemo2, columns, data, columns2, data2 };
    }
}
</script>
<style lang="scss">
    .select-container {
        width: 50%;
    }
</style>