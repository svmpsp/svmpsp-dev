<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const mobileNavbarDisplay = ref("none");

function getLocaleIcon(): String {
  const inactiveLocale = locales.value.filter(
    (loc) => loc.code !== locale.value,
  )[0];
  return inactiveLocale.icon;
}

function changeLocale() {
  console.log("Button was clicked!");
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

function toggleNavbarMenu() {
  switch (mobileNavbarDisplay.value) {
    case "none":
      mobileNavbarDisplay.value = "block";
      break;
    case "block":
      mobileNavbarDisplay.value = "none";
      break;
    default:
      throw new Error("Invalid navbar state");
  }
}
</script>

<template>
  <div class="header" id="mobile-header">
    <div id="mobile-fixed-header">
      <NuxtLinkLocale to="/">
        <div id="icon">🐘</div>
      </NuxtLinkLocale>
      <NuxtLinkLocale to="/">
        <div id="logo">svmpsp.dev</div>
      </NuxtLinkLocale>
      <button
        id="locale-icon"
        v-html="getLocaleIcon()"
        @click="changeLocale"
      ></button>
      <button @click="toggleNavbarMenu" id="header-menu-button">
        <Icon
          size="2.5rem"
          name="material-symbols-light:menu-rounded"
          style="color: #eeeeee"
        />
      </button>
    </div>
    <NavBar nav-bar-id="mobile-navbar" nav-element-class="mobile-navbar-item" />
  </div>
</template>

<style>
#mobile-fixed-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  padding: var(--main-contents-header-padding);
  border-bottom: var(--border-header-width) solid
    var(--color-main-accent-contrast);
}

#locale-icon {
  margin: 0;
  text-align: center;
  border: none;
  font-size: 1.5rem;
}

/* @keyframes navbarSlideIn {
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
} */

#mobile-navbar {
  display: v-bind(mobileNavbarDisplay);
  margin: 0;
  padding: 0;
  width: 100vw;
  /* position: fixed; */

  /* animation-duration: 2s;
  animation-timing-function: ease-in;
  animation-name: navbarSlideIn;
  animation-fill-mode: backwards; */
}

.mobile-navbar-item {
  background-color: var(--color-main-accent);
  list-style-type: none;
  font-size: var(--navbar-font-size);
  text-align: center;
  padding: var(--main-contents-header-padding) 0;
  border-bottom: var(--border-header-width) solid
    var(--color-main-accent-contrast);
}

.router-link-active .mobile-navbar-item {
  border: 0;
  background-color: var(--color-main-accent-contrast);
}

#header-menu-button {
  padding: 0.5rem;
  background-color: inherit;
  border: 2px solid var(--color-main-lighter);
  border-radius: 0.5rem;
}

#header-menu-button:active {
  border: 2px solid var(--color-main-accent-contrast);
}
</style>
