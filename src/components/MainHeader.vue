<script setup lang="ts">
const { $viewport } = useNuxtApp();
</script>

<template>
  <div v-if="$viewport.isGreaterOrEquals('tablet')" id="header-desktop">
    <div id="logo">Sivam Pasupathipillai - svmpsp.dev</div>
    <NavBar />
  </div>
  <div v-else id="header-mobile">
    <div id="logo">svmpsp.dev</div>
  </div>
</template>

<style>
#header-desktop,
#header-mobile {
  background-color: var(--global-color-30);
  color: var(--global-color-60);
  text-align: left;
  width: 100vw;
  border-bottom: var(--header-border-width) solid
    var(--global-color-10-contrast);

  font-family: "Karla", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

#header-desktop #logo {
  font-size: var(--header-title-font-size);
  padding: var(--header-title-padding) 0;
}

#header-mobile #logo {
  text-align: center;
  font-size: var(--header-title-font-size);
  padding: 1.5rem;
}
</style>
