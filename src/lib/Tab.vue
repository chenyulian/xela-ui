<template>
    <slot />
</template>

<script>
    export default {
        name: "Tab",
        props: {
            title: {
                type:String,
                default: "默认标签"
            },
            name: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>