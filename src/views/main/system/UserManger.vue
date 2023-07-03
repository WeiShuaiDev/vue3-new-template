<script setup lang="ts">
import { useUserStore } from '/@/store'
import CommonTable from '/@/components/commonTable'
import { ITableCol } from '/@/components/commonTable/types'
const store = useUserStore()
const userList = computed(() => store.userList)
const columns: ITableCol[] = [
  { label: '用户名', prop: 'name' },
  { label: '创建时间', prop: 'updateTime' },
  { label: '角色', prop: 'role', slotName: 'role' },
]
</script>

<template>
  <CommonTable :table-data="userList" :columns-list="columns">
    <template #role="scoped">
      <el-tag
        :type="
          scoped.row.role.name === 'superAdmin'
            ? 'success'
            : scoped.row.role.name === 'admin'
            ? 'warning'
            : 'danger'
        "
        size="small"
        effect="light"
        >{{ scoped.row.role.name }}</el-tag
      >
    </template>
  </CommonTable>
</template>

<style scoped></style>
