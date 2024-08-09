<script setup lang="ts">
useHead({
  title: "Home - svmpsp.dev",
});
const { $viewport } = useNuxtApp();
</script>

<template>
  <div id="index">
    <div v-if="$viewport.isGreaterOrEquals('tablet')" id="index-desktop">
      <div class="margins">
        <AppGallery />
      </div>
    </div>
    <div v-else id="index-mobile">
      <AppGallery />
    </div>
  </div>
</template>
