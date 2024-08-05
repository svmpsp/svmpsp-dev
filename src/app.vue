<script setup lang="ts">
useHead({
  title: "Title - svmpsp.dev",
  meta: [
    {
      name: "description",
      content: "Sivam Pasupathipillai's personal website.",
    },
  ],
  script: [
    {
      async: true,
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7590734585602123",
      crossorigin: "anonymous",
    },
  ],
});

</script>

<template>
  <div class="main-contents">
    <NuxtLayout>
      <MainHeader />
      <NuxtPage />
      <MainFooter />
    </NuxtLayout>
  </div>
</template>

<style>
/* https://colorhunt.co/palette/053b50176b8764ccc5eeeeee */
.main-contents {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

:root {
  --global-color-60: #EEEEEE;
  --global-color-30: #053B50;
  --global-color-10: #64CCC5;
  --global-color-10-contrast: #176B87;
  --header-title-font-size: 2.5rem;
  --header-title-padding: 2rem;
  --header-border-width: 5px;
  --navbar-item-font-size: 1.7rem;
  --footer-font-size: 1.3rem;

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

.merriweather-regular {
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
}
</style>