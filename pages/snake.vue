<script setup lang="ts">
const state = useDefaultStore()
const { $viewport } = useNuxtApp()
</script>

<template>
    <div v-if="$viewport.isGreaterOrEquals('tablet')" id="main-contents">
      <TitleBanner />
      <GameCanvas :key="state.stageSize" />
      <GameSettings />
    </div>
    <div v-else id="small-screen-box">
      <div>Ti amo polpetta! ❤️🐙</div>
    </div>

</template>

<style>
body {
  padding: 0;
  margin: 0;
  background: linear-gradient(#c9dabf, #fff);
  background-color: #fff;
}

#small-screen-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-weight: bold;
  font-size: 2rem;
  color: darkslategrey;
  background-color: white;
  text-align: center;
}

#main-contents {
  width: 900px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
