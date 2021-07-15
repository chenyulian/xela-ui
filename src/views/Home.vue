<template>
    <div class="home">
        <Topnav />
        <div class="banner">
            <h1>Xela UI</h1>
            <h2>一个Vue3 UI框架</h2>
            <p class="actions">
                <Button><a href="https://baidu.com">Github</a></Button>
                <Button type="primary" ><router-link to="/doc">开始</router-link></Button>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import Button from "../lib/Button.vue";
    export default {
        components: {
            Topnav,Button
        }
    }
</script>

<style lang="scss" scoped>
$base-color:#3463fe;

.home {
    background: white;
    color: $base-color;
}
h1 {
    font-size: 50px;
    font-weight: 600;
}
.banner {
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .actions {
        margin-top: 24px;
    }
}

</style>