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
      >
        <q-route-tab to="/" name="home" icon="home" label="Home" />
        <q-route-tab to="/heap" name="heap" icon="heap" label="Heap" />
        <q-route-tab to="/file" name="file" icon="file" label="File" />
        <q-route-tab to="/registry" name="registry" icon="" label="Registry" />
        <q-route-tab to="/network" name="network" icon="" label="Network" />
        <q-route-tab to="/memory" name="memory" icon="memory" label="Memory" />
      </q-tabs>

      <q-separator />

    </q-card>
  </main>
</template>
