<script setup lang="ts">
// import { state } from './lib/state'
const state = useDefaultStore()

</script>

<template>
  <div id="main-contents">
    <TitleBanner />
    <GameCanvas :key="state.stageSize" />
    <GameSettings />
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  background: linear-gradient(#c9dabf, #fff);
  background-color: #fff;
}

#app {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#main-contents {
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 17%;
  padding: 0;
}

.lobster-regular {
  font-family: 'Lobster', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.noto-sans-regular {
  font-family: 'Noto Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
}

/* Olive window */
/* palette https://colorhunt.co/palette/c9dabf9ca986808d7c5f6f65 */
.olive-win {
  background: #9ca986;
  border: 0.2rem solid #808d7c;
}
</style>
