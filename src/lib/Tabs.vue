<template>
<div class="xela-tabs">
    <div class="xela-tabs-nav">
        <div class="xela-tabs-item selected" v-for="(title, index) in titles" :key="index">{{title}}</div>
    </div>

    <div class="xela-tabs-content">
        <component v-for="(c, index) in defaults" :key="index" :is = "c" />
    </div>
</div>
    
</template>

<script>
import Tab from "./Tab.vue";
    export default {
        name: "Tabs",
        setup(props,  context) {
            const defaults = context.slots.default();
            defaults.forEach((tag) => {
                if(tag.type !== Tab) {
                    throw new Error("Tabs组件的子元素必须为Tab");
                }
            });

            const titles = defaults.map((tag) => {
                return tag.props.title;
            })
            return { defaults, titles }
        }
    }
</script>

<style lang="scss">
@import "./xela.scss";
$color-base: #3463fe;
$color-font: #333;
$border-color: #d9d9d9;

.xela-tabs {
    &-nav {
        display: flex;
        color: $color-font;
        border-bottom: 1px solid $border-color;
    }

    &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;
        &:first-child {
            margin-left: 0;
        }
        &.selected {
            color: $color-base;
            border-bottom: 2px solid $color-base;
        }
    }

     &-content {
        padding: 8px 0;
    }

}
</style>