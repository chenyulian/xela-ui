<template>
    <div class="layout">
        <Topnav class="nav"/>
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
                        <router-link to="/doc/tooltip">Tooltips组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/alert">Alert组件</router-link>
                    </li>
                     <li>
                        <router-link to="/doc/label">Label组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view />
            </main>
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
    background-color:lightyellow;
    position:fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    h2 {
        margin-bottom: 4px;
    }
    ol {
        li {
            padding: 4px 0;
        }
    }
     @media (max-width:500px) {
        
     }
}

main {
    overflow: auto;
}

.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    & > .nav {
        flex-shrink: 0;
    }

    & > .content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;
        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}

.content {
    display: flex;
    & > aside {
        flex-shrink: 0;
    }

    & > main {
        flex-grow: 1;
        padding: 16px;
        background: lightsteelblue;
    }
}

</style>