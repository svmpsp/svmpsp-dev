<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <NuxtLayout>
    <div id="error-page">
      <h2>{{ error?.statusMessage }}</h2>
      <p>Unfortunately your request generated an error! ☹️</p>
    </div>
  </NuxtLayout>
</template>

<style>
#error-page {
  padding: var(--main-contents-padding);
  line-height: var(--main-contents-line-height);
}

#error-page > h2 {
  font-size: var(--main-contents-h2-font-size);
}
</style>
