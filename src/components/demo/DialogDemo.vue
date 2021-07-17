<template>
    <h1>对话框 Dialog</h1>
    <Demo :component="DialogDemo1" />
    <Demo :component="DialogDemo2" />
    <Demo :component="DialogDemo3" />
    <Table :columns="columns" :data="data" />
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import Table from "../Table.vue";
import DialogDemo1 from "../../demo-code/DemoDialog/DialogDemo1.vue";
import DialogDemo2 from "../../demo-code/DemoDialog/DialogDemo2.vue";
import DialogDemo3 from "../../demo-code/DemoDialog/DialogDemo3.vue";
export default {
    components: {
        Demo,Table
    },
    setup() {
        const columns = {1: "名称", 2: "类型", 3: "可选值", 4: "默认值", 5: "说明"};
        const data = [{name: "visible", type: "`boolean`", value: "`true / false`", default: "`false`", desc: "对话框是否可见"},
                      {name: "closeOnClickOverlay", type: "`boolean`", value: "`true / false`", default: "`false`", desc: "是否开启点击遮罩层关闭对话框"},
                      {name: "ok", type: "Function", value: "`() => boolean`", default: "`undefined`", desc: "用户点击对话框确定按钮时执行的方法, 方法返回值为true时才会关闭对话框"},
                      {name: "cancel", type: "Function", value: "`() => void`", default: "`undefined`", desc: "用户点击对话框取消按钮时执行的方法"},];
        return { DialogDemo1, DialogDemo2, DialogDemo3, columns, data };
    }
}
</script>
<style lang="scss">
    
</style>