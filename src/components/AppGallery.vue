<script setup lang="ts">
const { $viewport } = useNuxtApp();
const apps = [{ title: "Snake", link: "snake" }];
</script>

<template>
  <div id="app-gallery">
    <div v-if="$viewport.isGreaterOrEquals('tablet')" id="app-gallery-desktop">
      <div class="margins">
        <AppCard class="app-card" v-for="app in apps" v-bind="app" />
      </div>
    </div>
    <div v-else id="app-gallery-mobile">
      <AppCard class="app-card" v-for="app in apps" v-bind="app" />
    </div>
  </div>
</template>
<style>
#app-gallery {
  column-gap: var(--general-box-padding);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: var(--general-box-padding);
  row-gap: var(--general-box-padding);
}
</style>
