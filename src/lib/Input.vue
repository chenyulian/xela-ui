<template>
    <input type="text" class="xela-input">
</template>

<script lang="ts">
    export default {
        name: "Input",
        props: {
            value: String
        }
    }
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
$base-color: #3463fe;

.xela-input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    max-width: 100%;
}
</style>