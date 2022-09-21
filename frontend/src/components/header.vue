<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div class="header" style="--wails-draggable: drag">
      <q-bar class="bg-primary text-white" style="height: 4vh">
        <div class="cursor-pointer">McCoffee</div>
        <q-space />
        <q-btn @click="WindowMinimise()" dense flat icon="minimize" />
        <q-btn @click="WindowToggleMaximise()" dense flat icon="crop_square" />
        <q-btn @click="Quit()" dense flat icon="close" />
      </q-bar>
    </div>
  </main>
</template>

<script setup>
import { WindowMinimise, Quit, WindowToggleMaximise } from '../../wailsjs/runtime/runtime';
</script>

<style scoped>
  .header {
    margin-bottom: 1rem;
  }
</style>
