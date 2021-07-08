<template>
    <button class="switch" 
            :class="checked?'checked':''"
            @click="toggleChecked">
        <span></span>
    </button>
</template>

<script lang="ts">
    import {ref} from "vue";

    export default {
        setup() {
            const checked = ref(false);
            const toggleChecked = () => {
                checked.value = !checked.value;
            }
            return {checked, toggleChecked}
        }
    }
</script>

<style lang="scss" scoped>
    $h: 20px;
    $h2: $h - 4px;
    button.switch {
        width: 2 * $h;
        height: $h;
        border: none;
        border-radius: $h / 2;
        position: relative;
        background-color: grey;

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