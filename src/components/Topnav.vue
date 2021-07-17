<template>
    <div class="topnav">
        <router-link to="/" class="logo"><img src="../assets/logo.png"></router-link>
        <!-- <div class="menu">
            <ul class="menu">
                <li>文档</li>
                <li>菜单2</li>
            </ul>
        </div> -->
        <span class="toggleAside" @click="toggleAside"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-JUSTIFYALL"></use>
</svg></span>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
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
$border-color: #efeff5;
.topnav {
    width: 100%;
    background: white;
    border-bottom: 1px solid $border-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
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

    & .toggleAside {
        display: none;
        font-size: 32px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }
    @media (max-width: 500px) {
        & .menu {
            display: none;
        }

        & .logo {
            margin: 0 auto;
        }

        & .toggleAside {
            display: inline-block;
        }
    }
}
</style>