<script setup lang="ts">
import SideBanner from "../components/SideBanner.vue";

const state = useDefaultStore();
const { $viewport } = useNuxtApp();
</script>

<template>
  <div v-if="$viewport.isGreaterOrEquals('tablet')" id="main-and-banners">
    <div id="main-contents">
      <TitleBanner />
      <GameCanvas />
      <GameSettings />
    </div>
  </div>
  <div v-else id="small-screen-box">
    <div>This page does not support <br />mobile devices. 🙁</div>
  </div>
</template>

<style>
#small-screen-box {
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

#main-and-banners {
  min-width: 100%;
  background: linear-gradient(
    var(--body-bg-gradient-from),
    var(--body-bg-gradient-to)
  );
  background-color: var(--body-bg-color);
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#main-contents {
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0;
}

.lobster-regular {
  font-family: "Lobster", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.noto-sans-regular {
  font-family: "Noto Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}

/* Olive window */
/* palette https://colorhunt.co/palette/c9dabf9ca986808d7c5f6f65 */
.olive-win {
  background: var(--panel-background-color);
  border: 0.2rem solid var(--panel-settings-border-color);
}
</style>
