<template>
    <div>
        <Demo :component="SwitchDemo1" />
    </div>
</template>
<script lang="ts">
import Switch from "../../lib/Switch.vue";
import Button from "../../lib/Button.vue";
import Demo from "../Demo.vue";
import SwitchDemo1 from "./SwitchDemo1.vue";
import "prismjs";
import "prismjs/themes/prism-solarizedlight.css"
import {ref} from "vue";

export default {
    components: {
        Switch, Button, Demo
    },
    setup() {
        const checked = ref(false);
        const Prism = (window as any).Prism;
        return { checked, SwitchDemo1 ,Prism}
    }
}
</script>
<style lang="scss">
$border-color: #efeff5;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
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
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>