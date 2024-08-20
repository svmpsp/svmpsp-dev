<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

function getLocaleIcon(): String {
  const inactiveLocale = locales.value.filter(
    (loc) => loc.code !== locale.value,
  )[0];
  return inactiveLocale.icon;
}

function changeLocale() {
  switch (locale.value) {
    case "it":
      setLocale("en");
      break;
    case "en":
      setLocale("it");
      break;
    default:
      console.log("Invalid locale: ", locale.value);
  }
}
</script>

<template>
  <div class="header" id="desktop-header">
    <div class="margins">
      <div id="icon-logo-box">
        <NuxtLinkLocale to="/">
          <div id="icon">🐘</div>
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/">
          <div id="logo">svmpsp.dev</div>
        </NuxtLinkLocale>
      </div>
      <div id="navbar-locale-box">
        <NavBar
          nav-bar-id="desktop-navbar"
          nav-element-class="desktop-navbar-item"
        />
        <button
          id="locale-icon"
          v-html="getLocaleIcon()"
          @click="changeLocale"
        ></button>
      </div>
    </div>
  </div>
</template>

<style>
#desktop-header {
  background-color: var(--color-main-accent);
  border-bottom: var(--border-header-width) solid
    var(--color-main-accent-contrast);
}

#navbar-locale-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: var(--header-border-width) solid var(--color-main-accent-contrast);

  font-size: var(--main-contents-header-subtitle-font-size);
  font-weight: var(--main-contents-font-weight);
}

#icon-logo-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  justify-content: space-between;
}

#icon {
  line-height: 10px;
  font-size: 2.5rem;
}

#logo {
  font-size: 1.8rem;
  text-align: center;
  width: fit-content;
}

#desktop-navbar {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
}

#locale-icon {
  margin: 0;
  padding: var(--main-contents-header-padding);
  text-align: center;
  line-height: 10px;

  background-color: inherit;
  border: none;
  font-size: inherit;
  color: inherit;
  font-weight: inherit;
  /* border: 2px solid var(--color-main-lighter);
  border-radius: 0.5rem; */
}

.desktop-navbar-item {
  padding: var(--main-contents-header-padding);
}

.desktop-navbar-item:hover {
  background-color: var(--color-main-accent-contrast);
}

#desktop-navbar .router-link-exact-active {
  text-decoration: underline var(--color-main-accent-contrast);
  text-decoration-thickness: var(--border-header-width);
}
</style>
