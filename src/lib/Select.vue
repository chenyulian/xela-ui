<template>
<div class="xela-select">
    <div class="xela-select-label"
        :class="{disabled: disabled}"
        @click="dropdownVisible = !disabled && !dropdownVisible" 
        @blur="dropdownVisible = false" tabindex="0">
        <div class="xela-select-selected">
            <div style="color: #d9d9d9" v-if="seletedLabel === ''">{{placeholder}}</div>
            <div class="xela-selected-label" v-else>{{seletedLabel}}</div> 
        </div>
        <div class="xela-select-toggle" :class="{active: dropdownVisible}"></div>
    </div>
    <transition name="fade">
        <ul class="xela-select-container" v-if="dropdownVisible">
            <li v-for="option in options" 
                :key="option.value"
                :class="{selected: value === option.value}"
                @click="select(option.value)">
                <span>{{option.label}}</span></li>
        </ul>
    </transition>
</div>

   
</template>

<script lang="ts">
    import { computed } from "vue";
    import SelectOption from "./interface/SelectOption";
    export default {
        name: "Select",
        props: {
            value: {
                type: String
            },
            options: {
                type: Array
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: "请选择"
            }
        },
        data() {
            return {
                dropdownVisible: false
            }
        },
        
        setup(props,context) {
            const select = (value) => {
                context.emit("update:value",value);
            }

            const seletedLabel = computed(() => {
                if (props.value !== "" && props.value !== null) 
                    return (props.options as SelectOption[]).find(i => i.value === props.value).label;
                return "";
            })

            return { select, seletedLabel }
        }
    }
</script>

<style lang="scss">
@import "./xela.scss";
$border-color: #d9d9d9;
$base-color: #3463fe;

.xela-select {
    position: relative;
    width: 100%;
}

.xela-select-selected {
    max-width: 90%;
}

.xela-select-label {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    max-width: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 8px;

    & .xela-selected-label {
        max-width: 100%;
        max-height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    &:hover {
        cursor: pointer;
        border-color: $base-color;
    }

    &:focus {
        border: 1px solid $base-color;
        box-shadow: 0px 0px 0px 2px rgb(179,197,225);
    }

    &.disabled {
        cursor: not-allowed;
        & .xela-selected-label {
            color: $border-color;
        }
        &:hover,
        &:focus {
            border: 1px solid $border-color;
            box-shadow: none;
        }
    }
    
}

.xela-select-toggle {
    width: 8px;
    height: 8px;
    border-left: 2px solid $border-color;
    border-bottom: 2px solid $border-color;
    transform: rotate(-45deg) translateY(-4px);
}

.xela-select-container {
    width: 100%;
    margin-top: 2px;
    background-color:white;
    max-height: 200px;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow-y: auto;
    // box-shadow: rgb(0 0 0 / 10%) 0px 20px 30px;
    padding: 4px 0;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;

    // 滚动条样式
    &::-webkit-scrollbar {
        width: 6px;
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb {
        background-color: $border-color;
    }
    &::-webkit-scrollbar-track {
        background-color: #F5F5F5;
    }
   
    & > li {
         display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 32px;
        line-height: 28px;
        padding-left: 8px;
        
        &:hover {
            background: #F5F5F5;
            cursor: pointer;
        }
        transition: background 0.2s ease ;

        &.selected {
            color: $base-color;
            background: #F5F5F5;
        }
        &>span {
            max-width: 90%;
            max-height: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 250ms ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>