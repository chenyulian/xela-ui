<template>
    <h1>开关 Switch</h1>
    <div>
        <Demo :component="SwitchDemo1" />
    </div>
    <Table :columns="columns" :data="data" />

</template>
<script lang="ts">
import Demo from "../Demo.vue";
import SwitchDemo1 from "../../demo-code/DemoSwitch/SwitchDemo1.vue";
import Table from "../Table.vue";
export default {
    components: {
        Demo,Table
    },
    setup() {
        const columns = {1: "名称", 2: "类型", 3: "可选值", 4: "默认值", 5: "说明"};
        const data = [{name: "value", type: "`boolean`", value: "`true / false`", default: "`false`", desc: "是否选中"}];
        return { SwitchDemo1, columns, data };
    }
}
</script>