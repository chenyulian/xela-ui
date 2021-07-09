<template>
    <h1>按钮 Button</h1>
    <p>按钮用于触发一个操作。</p>
    <p>Xela UI提供了五种按钮</p>
        <ul>
            <li>主按钮</li>
            <li>默认按钮</li>
            <li>虚线按钮</li>
            <li>文本按钮</li>
            <li>链接按钮</li>
        </ul>
        <p>以及四种状态属性与上面的按钮类型配合使用。</p>
        <p>disabled、ghost、danger、loading</p>
    <div>
        <h2>基本操作</h2> 
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
    </div>
    <div>
        <h2>按钮大小</h2> 
        <Button type="primary" size="small">Primary Small</Button>
        <Button>Default</Button>
        <Button type="dashed" size="large">large Dashed</Button>
        <Button type="text" size="large">large text</Button>
    </div>
    <div>
        <h2>级别</h2> 
        <Button type="primary">Primary normal</Button>
        <Button type="primary" level="warning">Primary danger</Button>
        <Button level="warning">Default danger</Button>                                                                                                                                                                                              
        <Button type="dashed" level="warning">Dashed warning</Button>
        <Button type="text" level="danger"> text danger</Button>
        <Button type="link" level="warning"> link warning</Button>
    </div>
    <div>
        <h2>加载中</h2> 
        <Button type="primary" loading>Primary Loading</Button>
        <Button loading>Default Loading</Button>
        <Button type="dashed" size="small" loading>Dashed loading</Button>
        <Button type="text" size="large" loading>text loading</Button>
    </div>
    <div>
        <h2>自定义颜色</h2> 
        <Button type="primary" color="#8a2be2" loading>8a2be2</Button>
        <Button color="#ff69b4">ff69b4</Button>
    </div>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue"
export default {
    name: "ButtonDemo",
    components: {
        Button
    },
    setup() {
        const xxx = ()=>{
            console.log("hi")
        }

        return {xxx}
    }
}
</script>
<style lang="scss">
    
</style>