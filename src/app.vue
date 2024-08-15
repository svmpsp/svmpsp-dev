<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - svmpsp.dev` : "svmpsp.dev";
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
