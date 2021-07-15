<template>
    <div>
        <Demo :component="SwitchDemo1" />
    </div>
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import SwitchDemo1 from "./SwitchDemo1.vue";
export default {
    components: {
        Demo
    },
    setup() {
        return { SwitchDemo1 };
    }
}
</script>