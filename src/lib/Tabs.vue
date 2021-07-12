<template>
    <div v-for="(title, index) in titles" :key="index">{{title}}</div>
    <component v-for="(c, index) in defaults" :key="index" :is = "c" />
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

<style lang="scss" scoped>

</style>