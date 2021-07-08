<template>
    <div>
        <Topnav />
        <div class="content">
            <aside v-if="asideVisible">
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/button">Button组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/switch">Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/select">Select组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/input">Input组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/avatar">Avatar组件</router-link>
                    </li>
                   <li>
                        <router-link to="/doc/tooltips">Tooltips组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/alert">Alert组件</router-link>
                    </li>
                     <li>
                        <router-link to="/doc/label">Label组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>主内容</main>
        </div>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import Topnav from "../components/Topnav.vue";
    export default {
        setup(){
            const asideVisible = inject<Ref<boolean>>("asideVisible");
            return { asideVisible };
        },
        components: {
            Topnav
        }
    }
</script>

<style lang="scss" scoped>
aside {
    width: 150px;
    padding: 16px;
    position:fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    background-color:lightyellow;
    h2 {
        margin-top: 4px;
    }

    ol {
        li {
            padding: 4px 0;
        }
    }

}
</style>