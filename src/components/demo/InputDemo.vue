<template>
    <h1>Input组件</h1>
    <Demo :component="InputDemo1" />
    <Demo :component="InputDemo2" />
    <Demo :component="InputDemo3" />
    <Table :columns="columns" :data="data" />
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import Table from "../Table.vue";
import InputDemo1 from "../../demo-code/DemoInput/InputDemo1.vue";
import InputDemo2 from "../../demo-code/DemoInput/InputDemo2.vue";
import InputDemo3 from "../../demo-code/DemoInput/InputDemo3.vue";
export default {
    name: "InputDemo",
    components: {
        Demo,Table
    },
    setup() {
        const columns = {1: "名称", 2: "类型", 3: "可选值", 4: "默认值", 5: "说明"};
        const data = [{name: "value", type: "`string`", value: "任意字符串", default: "`undefined`", desc: "Input的内容"},
                      {name: "error", type: "`string`", value: "任意字符串", default: "`undefined`", desc: "错误信息"},
                      {name: "disabled", type: "`boolean`", value: "`true / false`", default: "`false`", desc: "是否禁用"},
                      {name: "readonly", type: "`boolean`", value: "`true / false`", default: "`false`", desc: "是否只读"},
                      {name: "placeholder", type: "`boolean`", value: "任意字符串", default: "`''`", desc: "占位符"},
                      {name: "type", type: "`string`", value: "`'text' | 'password'`", default: "'text'", desc: "Input类型"}];
        return  { InputDemo1, InputDemo2, InputDemo3, columns, data };
    }
}
</script>
<style lang="scss">
    
</style>