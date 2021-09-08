<template>
    <div class="home">
        <Topnav />
        <div class="banner">
            <h1>Xela UI</h1>
            <h2>一个Vue3 UI框架</h2>
            <p class="actions">
                <a href="https://github.com/chenyulian/xela-ui">Github</a>
                <router-link to="/doc">开始</router-link>
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
$base-color:#2c3bc4;

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
.actions {
   padding: 8px 4px;
    margin-top: 20px;
    color: white;
    outline: none;
    a {
      display: inline-block;
      $h: 32px;
      height: $h;
      line-height: $h;
      margin: 0 8px;
      padding: 0 16px;
      background: $base-color;
      border-radius: $h/2;
      font-size: 14px;
    }
}

</style>