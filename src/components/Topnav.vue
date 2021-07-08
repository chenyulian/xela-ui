<template>
    <div class="topnav">
        <div class="logo" @click="toggleAside">LOGO</div>
        <div class="menu">
            <ul class="menu">
                <li>菜单1</li>
                <li>菜单2</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
// import { inject, Ref } from '@vue/runtime-core'
import { inject, Ref } from 'vue'
    export default {
        name: "Topnav",
        setup() {
            const asideVisible = inject<Ref<boolean>>("asideVisible");
            const toggleAside = ()=>{
                asideVisible.value = !asideVisible.value;
            }

            return { asideVisible, toggleAside };
        }
    }
</script>

<style lang="scss" scoped>
.topnav {
    background: lightsalmon;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    position: relative;
    z-index: 10;
    & .logo {
        max-width: 6em;
        margin-right: auto;
        &:hover {
            cursor: pointer;
        }
    }

    & .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
        }
    }
}
</style>