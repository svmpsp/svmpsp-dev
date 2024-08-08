<script setup lang="ts">
const { $viewport } = useNuxtApp();
const year = new Date().getFullYear();
</script>

<template>
  <div id="footer">
    <div v-if="$viewport.isGreaterOrEquals('tablet')" id="footer-desktop">
      <div>Made in Italy with ❤️</div>
      <br />
      <div>©️ {{ year }} Sivam Pasupathipillai. All rights reserved.</div>
    </div>
    <div v-else id="footer-mobile">
      <div>Made in Italy with ❤️</div>
      <br />
      <div>©️ {{ year }} Sivam Pasupathipillai. All rights reserved.</div>
    </div>
  </div>
</template>

<style>
#footer {
  display: flex;
  width: 100%;
  flex-direction: column;
}

#footer div {
  width: fit-content;
}

#footer-desktop,
#footer-mobile {
  width: 100vw;
  background-color: var(--global-color-30);
  color: var(--global-color-60);
  text-align: center;
  border-bottom: var(--header-border-width) solid
    var(--global-color-10-contrast);
  font-family: "Karla", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  font-size: var(--footer-font-size);
}
</style>
