<template>
    <div class="demo">
        <h2>{{component.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <component :is="component" />
        </div>
        <div class="demo-actions">
            <Button @click="toggleCode">查看代码</Button>
        </div>
        <div class="demo-code" v-if="codeVisible">
            <pre v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')" />
        </div>
    </div>
</template>

<script lang="ts">
    import { ref } from "vue";
    import Button from "../lib/Button.vue";
    import "prismjs";
    import "prismjs/themes/prism.css";

    export default {
        props: {
            component: Object
        },
        components: { Button },
        setup() {
            const Prism = (window as any).Prism;
            const codeVisible = ref(true);
            const toggleCode = () => {
                codeVisible.value = !codeVisible.value;
            }
            return { Prism, toggleCode, codeVisible };
        }
    }
</script>

<style lang="scss" scoped>
$border-color: #efeff5;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  overflow-x: hidden;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    background:#f6f8fa;
    font-size: 14px;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>