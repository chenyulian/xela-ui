<template>
    <div class="layout">
        <Topnav class="nav"/>
        <div class="content">
            <transition name="slide-fade">
            <aside v-if="asideVisible">
                <h3>开始</h3>
                <ol>
                    <li>
                        <router-link to="/doc/intro" active-class="active">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install" active-class="active">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started" active-class="active">开始使用</router-link>
                    </li>
                </ol>
                <h3>组件列表</h3>
                <ol>
                    <li>
                        <router-link to="/doc/button" active-class="active">按钮 <span>Button</span></router-link>
                    </li>
                    <li>
                        <router-link to="/doc/switch" active-class="active">开关 <span>Switch</span></router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog" active-class="active">对话框 <span>Dialog</span></router-link>
                    </li>
                     <li>
                        <router-link to="/doc/tabs" active-class="active">标签页 <span>Tabs</span></router-link>
                    </li>
                    <li>
                        <router-link to="/doc/select" active-class="active">选择器 <span>Select</span></router-link>
                    </li>
                    <li>
                        <router-link to="/doc/input" active-class="active">文本输入 <span>Input</span></router-link>
                    </li>
                    <!-- <li>
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
                    </li> -->
                </ol>
            </aside>
            </transition>
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
$border-color: #efeff5;
$base-color:#2c3bc4;
$aside-width: 270px;
aside {
    width: $aside-width;
    background-color:#fff;
    border-right: 1px solid $border-color;
    position:absolute;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: 1;
    h3 {
        margin-bottom: 4px;
        margin-top: 16px;
        padding-left: 16px;
    }
    ol {
        li {
            padding-left: 16px;
            font-size: 14px;
            &:hover {
                cursor: pointer;
                color: $base-color;
                & a > span {
                    color: $base-color;
                }
            }
            & a {
                display: block;
                height: 100% ;
                width: 100%;
                padding: 8px 0;
                padding-left: 8px;
            }
            & a > span {
                color: #9ea4aa;
            }
        }
    }
     @media (max-width:500px) {
        // display: none;
     }
     transition: left 250ms;
}

.active {
    color: $base-color;
    border-right: 2px solid $base-color;
    & >  span {
        color: $base-color;
    }
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
        padding-left: 300px;
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
        background: #fff;
        overflow: auto;
    }
}

.slide-fade-enter-active {
  transition: all 250ms ease;
}
.slide-fade-leave-active {
  transition: all 250ms ease;
}
.slide-fade-enter{
  transform: translateX(-$aside-width);
}

.slide-fade-leave-to {
  transform: translateX(-$aside-width);
}
</style>