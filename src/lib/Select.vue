<template>
<div class="xela-select-label" @click="dropdownVisible = !dropdownVisible" @blur="dropdownVisible = false" tabindex="0">
    <div class="xela-select-selected"></div>
    <div class="xela-select-toggle"></div>
</div>

<ul class="xela-select-container" v-if="dropdownVisible">
    <li v-for="option in options" :key="option.value">{{option.label}}</li>
</ul>
   
</template>

<script lang="ts">
    export default {
        name: "Select",
        props: {
            value: {
                type: String
            },
            options: {
                type: Array
            }
        },
        data() {
            return {
                dropdownVisible: false
            }
        },
        
        setup(props,context) {
            const xxx = ()=> {
                console.log("xxx")
            }

            return {xxx}
        }
    }
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
$base-color: #3463fe;

.xela-select-label {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    width: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // position: relative;
    padding: 2px 8px;
    &:hover {
        cursor: pointer;
        border-color: $base-color;
    }

    &:focus {
        border: 1px solid $base-color;
    }
}

.xela-select-toggle {
    width: 12px;
    height: 12px;
    border-left: 2px solid $border-color;
    border-bottom: 2px solid $border-color;
    // position: absolute;
    // right: 8px;
    // top: 50%;
    transform: rotate(-45deg) translateY(-4px)
}

.xela-select-container {
    margin-top: 4px;
    padding: 4px 8px;
    background-color:white;
    max-height: 180px;
    box-shadow: 2px 2px 14px 1px rgba(136,136,136,0.75);
    -webkit-box-shadow: 2px 2px 14px 1px rgba(136,136,136,0.75);
    -moz-box-shadow: 2px 2px 14px 1px rgba(136,136,136,0.75);
    & > li {
        height: 28px;
        line-height: 28px;
        padding-left: 4px;
        &:hover {
            background: $border-color;
            cursor: pointer;
        }
    }
}
</style>