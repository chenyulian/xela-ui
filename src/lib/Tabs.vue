<template>
<div class="xela-tabs">
    <div class="xela-tabs-nav" ref="container">
        <div class="xela-tabs-item"
            v-for="(tab, index) in defaults" 
            :class="{selected: selected === tab.props.name}" 
            :key="index"
            :ref="el => { if (tab.props.name === selected) selectedItem = el }"
            @click="select(tab.props.name)">{{tab.props.title}}</div>
        <div class="xela-tabs-indicator" ref="indicator"></div>
    </div>
    <div class="xela-tabs-content">
        <component :is="currentTab" :key="currentTab.props.name"></component>
    </div> 
</div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
    export default {
        name: "Tabs",
        props: {
            selected: {
                type: String
            }
        },
        setup(props,  context) {
            const indicator = ref<HTMLDivElement>(null);
            const container = ref<HTMLDivElement>(null);
            const selectedItem = ref<HTMLDivElement>(null);
            
            onMounted(()=>{
                watchEffect(()=>{
                    const {width} = selectedItem.value.getBoundingClientRect();
                    indicator.value.style.width = width + "px";
                    const {left:left1} = container.value.getBoundingClientRect();
                    const {left:left2} = selectedItem.value.getBoundingClientRect();
                    indicator.value.style.left = (left2 - left1) + "px";
                });
            })
            
            const defaults = context.slots.default();
            
            defaults.forEach((tag) => {
                if(tag.type !== Tab) {
                    throw new Error("Tabs组件的子元素必须为Tab");
                }
            });

            const select = (name: String) => {
                context.emit("update:selected", name);
            }

            const currentTab = computed(() => {
                return defaults.find((tag) => {
                    return tag.props.name === props.selected;
                });
            });
            return { defaults, select, currentTab, selectedItem,
                      indicator, container }
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
        position: relative;
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
            // border-bottom: 2px solid $color-base;
        }
    }

    &-indicator {
        position: absolute;
        height: 3px;
        background: $color-base;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: left 250ms;
    }

     &-content {
        padding: 8px 0;
    }

}
</style>