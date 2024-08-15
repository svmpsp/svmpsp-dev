<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <div id="footer">
    <div>Made in Italy with ❤️</div>
    <br />
    <div>©️ {{ year }} Sivam Pasupathipillai. All rights reserved.</div>
  </div>
</template>

<style>
#footer {
  display: flex;
  flex-direction: column;
  /* background-color: var(--color-main-accent); */
  background: linear-gradient(
    var(--color-main-accent),
    var(--color-main-accent-contrast)
  );

  color: var(--color-main-lighter);
  text-align: center;
  border-top: var(--border-header-width) solid var(--color-main-accent-contrast);
  font-family: "Karla", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 1.3rem;

  padding: 1rem;
}
</style>
