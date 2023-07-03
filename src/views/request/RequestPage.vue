<script setup lang="ts">
import { useRequest } from '/@/hooks'
import { getArticleListPages } from '/@/api/index'
const { data, loading, run, runParams } = useRequest(getArticleListPages, null)
console.log(data, loading, run)
const handleAgainRequest = () => {
  // 手动调用
  runParams(null)
}
</script>

<template>
  <el-button type="primary" size="small" @click="handleAgainRequest">
    重新请求
  </el-button>

  <div>{{ loading }}</div>
  <div>{{ data }}</div>
</template>

<style scoped></style>
