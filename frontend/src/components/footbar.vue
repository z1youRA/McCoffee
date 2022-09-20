<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-undef -->
<script setup>
const tab = $ref('home')
</script>

<template>
  <main>
    <q-card>
      <q-tabs
        v-model="tab"
        inline-label
        outside-arrows
        mobile-arrows
        class="bg-primary text-white shadow-2"
        style="height: 10vh"
      >
        <q-route-tab to="/" name="home" icon="home" label="Home" />
        <q-route-tab to="/heap" name="heap" icon="layers" label="Heap" />
        <q-route-tab to="/file" name="file" icon="folder" label="File" />
        <q-route-tab to="/registry" name="registry" icon="app_registration" label="Registry" />
        <q-route-tab to="/network" name="network" icon="cell_wifi" label="Network" />
        <q-route-tab to="/memory" name="memory" icon="memory" label="Memory" />
      </q-tabs>

      <q-separator />

    </q-card>
  </main>
</template>

<style scoped>
</style>
