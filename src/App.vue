<template>
  <div class="index">
    <span>当前数值{{ countComputed }}</span>
    <br />
    <span>双倍数值{{ doubleCount }}</span>
    <br />
    <el-button type="primary" size="default" @click="countStore.countAdd">
      +1
    </el-button>
    <el-button type="primary" size="default" @click="countStore.countReduce">
      -1
    </el-button>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useCountStore } from './store'
import { storeToRefs } from 'pinia'
import request from './service'
const countStore = useCountStore()
// 通过计算属性
const countComputed = computed(() => countStore.count)
// 通过 storeToRefs api 结构
const { doubleCount } = storeToRefs(countStore)

const getArticleListPage = () => {
  return request<any, any>({
    url: '/api/article/list/0/json',
    method: 'GET',
    interceptors: {
      requestInterceptors(res) {
        console.log('接口请求拦截')
        return res
      },
      responseInterceptors(result) {
        console.log('接口响应拦截')
        return result
      },
    },
  })
}
onMounted(async () => {
  const res = await getArticleListPage()
  console.log(res)
})
</script>
<style scoped></style>
