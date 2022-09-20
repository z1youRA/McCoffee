<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { toRef } from 'vue'
import DataTable from '../components/dataTable.vue'
const props = defineProps({
  registryArr: Array
})

const registryArr = toRef(props, 'registryArr')
</script>

<template>
  <div id="page-container">
    <DataTable :dataArr="registryArr" :dataType="3"/>
  </div>
</template>

<style scoped>
    *{
        color: black;
    }
</style>
