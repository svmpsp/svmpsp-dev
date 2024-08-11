<script setup lang="ts">
const { $viewport } = useNuxtApp();
useHead({
  title: "About - svmpsp.dev",
});
</script>

<template>
  <div id="about">
    <AboutContents />
  </div>
</template>
