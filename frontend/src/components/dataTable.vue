<script setup>
import { toRef } from 'vue'
const props = defineProps({
  dataType: Number, // 1 - Heap; 2 - File; 3 - Registry
  dataArr: Array
})

const dataArr = toRef(props, 'dataArr')

const columns = [
  {
    name: 'time',
    required: true,
    label: 'Time',
    align: 'left',
    field: row => row.time,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'pid', align: 'center', label: 'Pid', field: 'pid', sortable: true },
  { name: 'operation', align: 'center', label: 'Operation', field: 'Operation', sortable: false },
  { name: 'result', label: 'Result', field: 'result', sortable: false },
  { name: 'remark', label: 'Remark', field: '', sortable: false }
]

const rows = dataArr
</script>

<template>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >

        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
            </q-td>
            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.value }}
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
              <!-- <div class="text-left">
                <q-list bordered separator>
                  <q-item v-ripple v-for="attr in props.row.attributes" :key="attr.id">
                    <q-item-section> {{attr}} : {{props.row[attr]}}</q-item-section>
                  </q-item>
                </q-list>
              </div> -->
            </q-td>
          </q-tr>
        </template>

      </q-table>
    </div>
  </template>
