<script setup lang="ts">
const mobileNavbarDisplay = ref("none");

function toggleNavbarMenu() {
  console.log("Button was clicked!");
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
#mobile-header #logo {
  font-size: 1.8rem;
}

#mobile-header #icon {
  font-size: 3rem;
  line-height: 10px;
}

#mobile-fixed-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  padding: 1rem;
}

#mobile-navbar {
  display: v-bind(mobileNavbarDisplay);
  margin: 0;
  padding: 0;
  width: 100vw;
}

.mobile-navbar-item {
  background-color: var(--color-main-accent);
  list-style-type: none;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem 0;
  border-top: var(--header-border-width) solid var(--color-main-accent-contrast);
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
