<template>
    <h1>按钮 Button</h1>
    <!-- <p>按钮用于触发一个操作。</p>
    <p>Xela UI提供了五种按钮</p>
        <ul>
            <li>主按钮</li>
            <li>默认按钮</li>
            <li>虚线按钮</li>
            <li>文本按钮</li>
            <li>链接按钮</li>
        </ul>
        <p>以及四种状态属性与上面的按钮类型配合使用。</p>
        <p>disabled、ghost、danger、loading</p> -->
        <Demo :component="ButtonDemo1" />
        <Demo :component="ButtonDemo2" />
        <Demo :component="ButtonDemo3" />
        <Demo :component="ButtonDemo4" />
        <Demo :component="ButtonDemo5" />
        <Demo :component="ButtonDemo6" />
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
import ButtonDemo1 from "../../demo-code/DemoButton/ButtonDemo1.vue";
import ButtonDemo2 from "../../demo-code/DemoButton/ButtonDemo2.vue";
import ButtonDemo3 from "../../demo-code/DemoButton/ButtonDemo3.vue";
import ButtonDemo4 from "../../demo-code/DemoButton/ButtonDemo4.vue";
import ButtonDemo5 from "../../demo-code/DemoButton/ButtonDemo5.vue";
import ButtonDemo6 from "../../demo-code/DemoButton/ButtonDemo6.vue";
import Demo from "../Demo.vue";

export default {
    name: "ButtonDemo",
    components: {
        Button,Demo
    },
    setup() {
        return { ButtonDemo1, ButtonDemo2, ButtonDemo3, ButtonDemo4, ButtonDemo5, ButtonDemo6 }
    }
}
</script>
<style lang="scss">
    
</style>