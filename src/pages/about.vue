<script setup lang="ts">
const { $viewport } = useNuxtApp();
useHead({
  title: "About - svmpsp.dev",
});
</script>

<template>
  <div id="about">
    <div v-if="$viewport.isGreaterOrEquals('tablet')" id="about-desktop">
      <div class="margins">
        <AboutContents />
      </div>
    </div>
    <div v-else id="about-mobile">
      <AboutContents />
    </div>
  </div>
</template>

<style></style>
