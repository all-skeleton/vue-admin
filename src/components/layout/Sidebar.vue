<script setup lang="ts">
import {inject, ref} from 'vue'

const sidebarCollapse = ref(inject('sidebarCollapse'))
const menus = [
  {
    id: 11,
    name: '用户管理',
    icon: 'user',
    children: [
      {id: 12, name: '用户列表', path: '/user/index'},
    ],
  },
]

</script>

<template lang="pug">
div.sidebar
  el-menu(default-active="1-1" class="menu" :collapse="sidebarCollapse" router)
    div.logo
      img(src="../../assets/logo.svg" width="32" height="32")
      span(v-show="!sidebarCollapse") 爱享素材
    el-sub-menu(v-for="menu in menus" :key="menu.id" :index="menu.id + ''")
      template(#title)
        component.menu-icon(:is="menu.icon")
        span {{ menu.name }}
      el-menu-item(v-for="sub in menu.children" :key="sub.id" :index="sub.path + ''") {{ sub.name }}
</template>

<style lang="less" scoped>
.menu-icon {
  max-width: 1rem;
}

.sidebar {
  height: 100vh;
  box-shadow: .2rem 0 .6rem 0 rgba(0, 0, 0, 0.1);
  .menu {
    border-right: unset;
    .logo {
      height: 5rem;
      line-height: 5rem;
      padding: 0 1rem;
      overflow: hidden;
      img {
        vertical-align: middle;
        margin-left: .6rem;
      }
      span {
        font-weight: bold;
        font-size: .16rem;
      }
    }
  }
  .menu:not(.el-menu--collapse) {
    width: 10rem;
  }
}
</style>
