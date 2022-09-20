<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { toRef } from 'vue'
import DataTable from '../components/dataTable.vue'
const props = defineProps({
  fileArr: Array
})

const fileArr = toRef(props, 'fileArr')
</script>

<template>
  <div id="page-container">
    <DataTable :dataArr="fileArr" :dataType = "2"/>
  </div>
</template>

<style scoped>
    *{
        color: black;
    }
</style>
