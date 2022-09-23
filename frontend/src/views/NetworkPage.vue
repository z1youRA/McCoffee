<script setup>
import { toRef } from 'vue'
import DataTable from '../components/dataTable.vue'
const props = defineProps({
  networkArr: Array
})

const networkArr = toRef(props, 'networkArr')
</script>

<template>
  <div id="page-container">
    <DataTable :dataArr="networkArr"/>
  </div>
</template>

<style scoped>
    *{
        color: black;
    }
</style>
