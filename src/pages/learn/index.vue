<script setup lang="ts">
const { $viewport } = useNuxtApp();
</script>

<template>
  <div id="learn">
    <div v-if="$viewport.isGreaterOrEquals('tablet')" id="learn-desktop">
      <div class="margins">
        <CourseCatalog />
      </div>
    </div>
    <div v-else id="learn-mobile">
      <CourseCatalog />
    </div>
  </div>
</template>
