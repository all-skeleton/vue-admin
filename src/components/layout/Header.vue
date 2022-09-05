<script setup lang="ts">
import localStorageCache from "../../common/localStorage"

const props = defineProps(['sidebarCollapse'])
const emits = defineEmits(['update:sidebarCollapse'])
const userInfo = localStorageCache.get('x-user')

const toggle = () => {
  emits('update:sidebarCollapse', !props.sidebarCollapse)
}

const signOut = () => {
  localStorageCache.del("x-token")
  localStorageCache.del("x-user")
  window.location.href = '/login'
}

</script>

<template lang="pug">
div.header
  div.fold-icon(@click="toggle")
    el-icon(v-if="!sidebarCollapse" :size="24" color="#909399")
    el-icon(v-else :size="24" color="#909399")
  el-dropdown(trigger="click")
    div.avatar
      el-avatar(:src="userInfo.avatar")
      span {{ userInfo.name }}
      el-icon
        caret-bottom
    template(#dropdown)
      el-dropdown-menu
        el-dropdown-item(icon="right" divided @click="signOut") 用户登出
</template>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  box-shadow: .3rem .1rem .4rem 0 rgba(0, 0, 0, 0.1);
  .fold-icon {
    padding: .11rem .13rem;
  }
  .avatar {
    padding: .5rem;
    margin-right: .20rem;
    display: inline-flex;
    align-items: center;
    .el-avatar {
      margin-right: .5rem;
    }
  }
  .fold-icon:hover,
  .avatar:hover {
    cursor: pointer;
    background: #f7f7f7;
  }
}
</style>
