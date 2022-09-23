<script setup>
import { toRef } from 'vue'
import DataTable from '../components/dataTable.vue'
const props = defineProps({
  memoryArr: Array
})

const memoryArr = toRef(props, 'memoryArr')
</script>

<template>
  <div id="page-container">
    <DataTable :dataArr="memoryArr"/>
  </div>
</template>

<style scoped>
    *{
        color: black;
    }
</style>
