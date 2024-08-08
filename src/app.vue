<script setup lang="ts"></script>

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
.main-contents {
  min-height: 100vh;
  width: 100%;
}

/* Remove margins from headers */
h1,
h2,
h3 {
  margin-top: 0;
}

/* Global variables */
/* https://colorhunt.co/palette/053b50176b8764ccc5eeeeee */
:root {
  --global-color-60: #eeeeee;
  --global-color-30: #053b50;
  --global-color-10: #64ccc5;
  --global-color-10-contrast: #176b87;
  --header-title-font-size: 2rem;
  --header-title-padding: 2rem;
  --header-border-width: 5px;
  --navbar-item-font-size: 1.5rem;
  --footer-font-size: 1.3rem;

  --app-card-bg-color: var(--global-color-30);
  --app-card-border-color: var(--global-color-10-contrast);
  --app-card-color: #def9c4;
  --app-card-font-size: 1.3rem;
  --app-card-hover-border-color: var(--global-color-10);
  --app-card-shadow-color: grey;
  --general-box-padding: 1.5rem;
  --header-font-size: 2rem;
  --main-contents-bg-color: #def9c4;
  --subtitle-color: #50b498;
  --title-color: #468585;
  --body-bg-color: #fff;
  --body-bg-gradient-from: #c9dabf;
  --body-bg-gradient-to: #fff;
  --mobile-banner-text-color: #5f6f65;
  --panel-background-color: #9ca986;
  --panel-settings-border-color: #808d7c;
}

a,
a:active,
a:hover {
  text-decoration: none;
  color: inherit;
  width: fit-content;
}

/* Font classes */
.merriweather-regular {
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
}

body {
  background-color: var(--global-color-60);
  color: var(--global-color-30);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
}

.margins {
  width: 750px;
  margin: 0 auto;
}

#index-main-contents {
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
