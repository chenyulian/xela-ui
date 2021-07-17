<template>
  <router-view />
</template>

<script lang="ts">
// to fix 这里两个import语句如果交换位置，有时候从文档页切换到主页太快会报错
import { router } from "./router/index";
import { ref, provide, onMounted } from "vue";

export default {
  name: "App",
  setup(){
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width > 500 ? true:false);
    provide("asideVisible",asideVisible);
    router.afterEach(() => {
      if(width <= 500) {
        asideVisible.value = false;
      }
    });
    onMounted(()=>{
        window.onresize = () => {
          if( document.documentElement.clientWidth > 500 ) {
            asideVisible.value = true;
          } else {
            asideVisible.value = false;
          }         
        }
    })
  }
}
</script>
