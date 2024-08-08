<script setup lang="ts">
const { $viewport } = useNuxtApp();
</script>

<template>
  <div v-if="$viewport.isGreaterOrEquals('tablet')" id="learn-desktop">
    <CourseCatalog />
  </div>
  <div v-else id="learn-mobile">
    <CourseCatalog />
  </div>
</template>

<style>
#courses-desktop {
  margin: auto 1rem;
}
</style>
