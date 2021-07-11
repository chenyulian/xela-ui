<template>
    <button class="xela-button" 
            :class="classes"
            :disabled="disabled"
            >
        <span v-if="loading" class="xela-loadingIndicator"></span>
        <slot />
    </button>
</template>

<script lang="ts">
    import { computed } from "vue";
    import { LightenDarkenColor } from "./LightenDarkenColor";
    export default {
        setup(props, context) {
            const {type, size, disabled, level, 
                    loading, color} = props;
            const classes = computed(()=>{
                return {
                    [`xela-button-type-${type}`]: type,
                    [`xela-button-size-${size}`]: size,
                    [`xela-button-level-${level}`]: level,
                }
            });
            const baseColor = computed(()=>{
                if(level === 'danger') {
                return "#fc1414";
                }
                if(level === "success") {
                    return "#1bd2a4";
                }
                if(level === "warning") {
                    return "#f0a020";
                }
                if(color !== undefined) {
                    return color;
                }
                return "#3463fe";
               
            });

            const darkenColor = computed(()=>{
                let baseColorVal = baseColor.value;
                return LightenDarkenColor(baseColorVal, 40);
            });

            const lightenColor = computed(()=>{
                let baseColorVal = baseColor.value;
                return LightenDarkenColor(baseColorVal, 40);
            });

            const shadowColor = computed(()=>{
                let baseColorVal = baseColor.value;
                return LightenDarkenColor(baseColorVal, 80);
            });
            return { classes, color, baseColor, 
                darkenColor, lightenColor, shadowColor,
                disabled };
            
        },
        props: {
            type: {
                type: String,
                default: "default"
            },
            size: {
                type: String,
                default: "normal"
            },
            level: {
                type: String,
                default: "normal"
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: "#3463fe"
            }
        },
    }
</script>

<style lang="scss">
@import "./xela.scss";
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;
$color-base: v-bind(baseColor);
$color-darken: v-bind(darkenColor);
$color-lighten: v-bind(lightenColor);
$color-shadow: v-bind(shadowColor);
$grey: grey;

.xela-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    // box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    &+&{
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $color-base;
        border-color:  $color-base;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &.xela-button-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }

    &.xela-button-size-large {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }

    &.xela-button-type-primary {
        background: $color-base;
        border: transparent;
        color: white;

        &:hover {
            background: $color-lighten;
            border: transparent;
        }

        &:focus {
            box-shadow: 0px 0px 0px 2px $color-shadow;
        }

        & > .xela-loadingIndicator {
            border-color: white white white transparent;
        }
    }

    &.xela-button-type-default,
    &.xela-button-type-dashed {
        &.xela-button-level-danger,
        &.xela-button-level-warning,
        &.xela-button-level-success {
            border-color: $color-base;
            color: $color-base;
            &:hover,
            &:focus {
                border-color: $color-lighten;
                color: $color-lighten;
            }
        }
    }

    &.xela-button-type-link,
    &.xela-button-type-text {
        border: transparent;
        box-shadow: none;
        &.xela-button-level-danger,
        &.xela-button-level-warning,
        &.xela-button-level-success {
            color: $color-base;
        }
    }

    &.xela-button-type-link {
        &:hover,
        &:focus {
            color: $color-lighten;
        }
    }

    &.xela-button-type-text {
        color: inherit;
        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }

    &.xela-button-type-dashed {
        border-style: dashed;
    }

    &.xela-button-type-default {
        &[disabled] {
        cursor: not-allowed;
        color: $grey;
        &:hover {
            border-color: $border-color;
        }
        }
    }

    &.xela-button-type-primary {
        &[disabled] {
            cursor: not-allowed;
            background-color: $grey;
        }
    }
    &.xela-button-type-link, &.xela-button-type-text {
        &[disabled] {
        cursor: not-allowed;
        color: $grey;
        }
    }
}

 

.xela-loadingIndicator {
     width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $color-base $color-base $color-base transparent;
    border-style: solid;
    border-width: 2px;
    animation: xela-spin 1s infinite linear;
}

@keyframes xela-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}

</style>