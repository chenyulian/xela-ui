<template>
    <div>
        <div class="topnav">
            <div class="log">LOGO</div>
            <div class="menu">
                <ul class="menu">
                    <li>菜单1</li>
                    <li>菜单2</li>
                </ul>
            </div>
        </div>
        <div class="banner">
            <h1>Xela UI</h1>
            <h2>UI框架</h2>
            <p class="actions">
                <a href="">Github</a>
                <a href="">开始</a>
            </p>
        </div>
    </div>
</template>

<script>
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