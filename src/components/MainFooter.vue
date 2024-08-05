<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <div id="footer-bar">
    <div class="margins">
      <div>Made in Italy with ❤️</div>
      <br />
      <div>©️ {{ year }} Sivam Pasupathipillai. All rights reserved.</div>
    </div>
  </div>
</template>

<style>
#footer-bar {
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
  padding: 1.5rem;
}
</style>
