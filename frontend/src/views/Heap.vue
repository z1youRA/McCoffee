<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { toRef } from 'vue'
import DataTable from '../components/dataTable.vue'
const props = defineProps({
  heapArr: Array
})

const heapArr = toRef(props, 'heapArr')
</script>

<template>
  <div id="page-container">
    <DataTable :dataArr="heapArr" :dataType="1"/>
  </div>
</template>

<style scoped>
    *{
        color: black;
    }
</style>
