<script setup lang="ts">
const { $viewport } = useNuxtApp();
const route = useRoute();
</script>

<template>
  <div id="main-contents">
    <div id="if-desktop" v-if="$viewport.isGreaterOrEquals('tablet')">
      <DesktopHeader :key="route.fullPath" />
      <div class="margins">
        <slot></slot>
      </div>
      <MainFooter />
    </div>
    <div v-else id="if-mobile">
      <MobileHeader :key="route.fullPath" />
      <slot></slot>
      <MainFooter />
    </div>
  </div>
</template>

<style>
.header {
  background-color: var(--color-main-accent);
  color: var(--color-main-lighter);
  text-align: left;
  width: 100vw;
  /* border-bottom: var(--border-header-width) solid
    var(--color-main-accent-contrast); */

  font-family: "Karla", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
