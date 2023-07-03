<script setup lang="ts">
import { useUserStore } from '/@/store'
import CommonTable from '/@/components/commonTable'
import { ITableCol } from '/@/components/commonTable/types'
const store = useUserStore()
const roleList = computed(() => store.roleList)
const columns: ITableCol[] = [
  { label: '角色名称', prop: 'name', width: 120 },
  { label: '创建时间', prop: 'createTime', width: 120 },
  { label: '权限列表', prop: 'permissionNames', slotName: 'per' },
]
</script>

<template>
  <CommonTable :table-data="roleList" :columns-list="columns">
    <template #per="scoped">
      {{ scoped.row.permissionNames.join(',') }}
    </template>
  </CommonTable>
</template>

<style scoped></style>
