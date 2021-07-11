<template>
    <div class="xela-dialog-overlay">
        overlay
    </div>
    <div class="xela-dialog-wrapper">
        <header>标题</header>
        <main>
            <p>内容1</p>
            <p>内容2</p>
        </main>
        <footer>
            <Button>确定</Button>
            <Button>取消</Button>
        </footer>
    </div>
</template>

<script lang="ts">
import Button from "./Button.vue";

    export default {
        name: "Dialog",
        components: {
            Button
        }
    }
</script>

<style lang="scss" scoped>

</style>