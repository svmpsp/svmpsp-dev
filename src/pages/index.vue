<script setup lang="ts">
useHead({
  title: "Home - svmpsp.dev",
})
</script>

<template>
  <div class="main-contents">
    <AppGallery />
  </div>
</template>

<style>
/* https://colorhunt.co/palette/053b50176b8764ccc5eeeeee */
:root {
  --global-color-60: #EEEEEE;
  --global-color-30: #053B50;
  --global-color-10: #64CCC5;
  --global-color-10-contrast: #176B87;

  --app-card-bg-color: var(--global-color-30);
  --app-card-border-color: var(--global-color-10-contrast);
  --app-card-color: #DEF9C4;
  --app-card-font-size: 1.3rem;
  --app-card-hover-border-color: var(--global-color-10);
  --app-card-shadow-color: grey;
  --general-box-padding: 1.5rem;
  --header-font-size: 2rem;
  --main-contents-bg-color: #DEF9C4;
  --subtitle-color: #50B498;
  --title-color: #468585;
  --body-bg-color: #fff;
  --body-bg-gradient-from: #c9dabf;
  --body-bg-gradient-to: #fff;
  --mobile-banner-text-color: #5f6f65;
  --panel-background-color: #9ca986;
  --panel-settings-border-color: #808d7c;
}

body {
  margin: 0;
  padding: 0;
}

.main-contents {
  color: var(--global-color-30);
  background-color: var(--global-color-60);
  display: flex;
  flex-direction: column;
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
</style>