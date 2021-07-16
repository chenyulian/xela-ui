<template>
    <div class="xela-input-wrapper" :class="{error}">
        <input class="xela-input" 
        :value="value" 
        :disabled="disabled" 
        :readonly="readonly"
        :placeholder="placeholder"
        :type="type"
        @input="$emit('update:value', $event.target.value)"
       >
    </div>
    <template v-if="error">
        <span class="xela-input-error-message">{{error}}</span>
    </template>
</template>

<script lang="ts">
    export default {
        name: "Input",
        props: {
            value: String,
            error: String,
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ""
            },
            type: {
                type: String,
                default: 'text'
            },
        },
        setup(props, context) {
        }
    }
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #d9d9d9;
$border-color-hover: #999;
$base-color: #3463fe;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #F1453D;
$color-shadow:#b3c5e1;

.xela-input-wrapper {
    font-size: $font-size; display: inline-flex;
    align-items: center;
    &:not(:last-child) {
        margin-right: .5em;
    }
    & > input {
        height: 32px; border: 1px solid $border-color; border-radius: 4px; padding: 0 8px; font-size: inherit;
        &:hover { border-color: $base-color; }
        &:focus { 
            border-color: $base-color; outline: none; 
            // box-shadow: 0px 0px 0px 2px $color-shadow;
        }
        &[disabled], &[readonly] {border-color: #bbb;color: #bbb; cursor: not-allowed; }
        transition: border-color .25s cubic-bezier(.645, .045, .355, 1);
    }

    &.error {
      & > input { border-color: $red; }
    }
}

.xela-input-error-message {
    color: $red; 
}
</style>