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
      <div id="logo">svmpsp.dev</div>
      <button @click="toggleNavbarMenu" id="header-menu-button">
        <Icon
          size="3rem"
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
  font-size: 2rem;
}

#mobile-fixed-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem;
}

#mobile-navbar {
  display: v-bind(mobileNavbarDisplay);
  margin: 0;
  padding: 0;
  width: 100vw;
}

.mobile-navbar-item {
  list-style-type: none;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem 0;
  border-top: var(--header-border-width) solid var(--global-color-10-contrast);
}

#header-menu-button {
  padding: 0 1.5rem;
  background-color: inherit;
  border: 0;
}

#header-mobile #logo {
  text-align: center;
  padding: 1.5rem;
}
</style>
