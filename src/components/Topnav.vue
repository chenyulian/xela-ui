<template>
    <div class="topnav">
        <div class="log">LOGO</div>
        <div class="menu">
            <ul class="menu">
                <li>菜单1</li>
                <li>菜单2</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        
    }
</script>

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    & .logo {
        max-width: 6em;
        margin-right: auto;
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