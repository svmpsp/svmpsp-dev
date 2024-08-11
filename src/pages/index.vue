<script setup lang="ts">
useHead({
  title: "Home - svmpsp.dev",
});
const { $viewport } = useNuxtApp();
</script>

<template>
  <div id="index">
    <AppGallery />
  </div>
</template>
