<template>
    <button class="xela-switch" 
            :class="{checked:value}"
            @click="toggleChecked">
        <span></span>
    </button>
</template>

<script lang="ts">
    export default {
        setup(props, context) {
            const toggleChecked = () => {
                context.emit("update:value", !props.value)
            }
            return {toggleChecked}
        },
        props: {
            value: Boolean
        }
    }
</script>

<style lang="scss">
    @import "./xela.scss";
    $h: 20px;
    $h2: $h - 4px;
    .xela-switch {
        width: 2 * $h;
        height: $h;
        border: none;
        border-radius: $h / 2;
        position: relative;
        background-color: #e3e3e3;
        transition: background-color 250ms;

        &:hover {
            cursor: pointer;
        }

        & > span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: #fff;
            border-radius: $h2 / 2;
            transition: left 250ms;
        }

        &.checked {
            background-color: #3463fe;
            & > span {
                 left: calc(100% - #{$h2} - 2px);
            }
        }
    }
</style>