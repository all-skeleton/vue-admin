<script setup lang="ts">
import {inject, ref} from "vue"
import {postDel} from "../common/api"

import {ElMessageBox} from "element-plus"

const props:any = defineProps(['row'])
const mMark: any = ref(inject('mMark'))
const tableData: any = ref(inject('tableData'))

const handleDel = (row: any, index: number) => {
  ElMessageBox.confirm('确定删除该用户？').then(() => {
    postDel(row.id, mMark.value).then((res: any) => {
      tableData.value.splice(index, 1)
    })
  })
}

</script>
<template lang="pug">
el-button(size="small" type="danger" @click="handleDel(props.row, props.index)" ) 删除
</template>
