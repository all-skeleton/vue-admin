<script setup lang="ts">
import {ref, provide} from 'vue'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

const sidebarCollapse = ref(false)
provide('sidebarCollapse', sidebarCollapse)

</script>

<template lang="pug">
el-container
  Sidebar
  el-container
    el-header
      Header(v-model:sidebar-collapse="sidebarCollapse")
    el-main
      router-view
    Footer
</template>

<style lang="less" scoped>
.el-header {
  padding: 0;
}
.el-main {
  text-align: center;
}
</style>
