<script setup lang="ts">
const state = useDefaultStore();
const { $viewport } = useNuxtApp();
</script>

<template>
  <div v-if="$viewport.isGreaterOrEquals('tablet')" id="snake-desktop">
    <TitleBanner />
    <GameCanvas />
    <GameSettings />
  </div>
  <div v-else id="snake-mobile">
    <div>This page does not support <br />mobile devices. 🙁</div>
  </div>
</template>

<style>
#snake-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--mobile-banner-text-color);
  text-align: center;
  position: relative;
  top: -50px;
}

#snake-desktop {
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0;
}

/* Olive window */
/* palette https://colorhunt.co/palette/c9dabf9ca986808d7c5f6f65 */
.olive-win {
  background: var(--panel-background-color);
  border: 0.2rem solid var(--panel-settings-border-color);
}
</style>
