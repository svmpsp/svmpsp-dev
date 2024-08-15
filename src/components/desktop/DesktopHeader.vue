<script setup lang="ts"></script>

<template>
  <div class="header" id="desktop-header">
    <div class="margins">
      <div id="icon-logo-box">
        <NuxtLinkLocale to="/">
          <div id="icon">🐘</div>
        </NuxtLinkLocale>
        <div id="logo">svmpsp.dev</div>
      </div>
      <div id="ruler"></div>
      <NavBar
        nav-bar-id="desktop-navbar"
        nav-element-class="desktop-navbar-item"
      />
    </div>
  </div>
</template>

<style>
/* #ruler {
  border-bottom: var(--header-border-width) solid
    var(--global-color-10-contrast);
  border-radius: 2rem;
} */

#icon-logo-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  justify-content: space-between;
}

#icon {
  line-height: 10px;
  font-size: 3rem;
}

#logo {
  font-size: 1.8rem;
  text-align: center;
  width: fit-content;
}

#desktop-navbar {
  border-top: var(--header-border-width) solid var(--global-color-10-contrast);
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
}

.desktop-navbar-item {
  font-size: 1.2rem;
  list-style-type: none;
  padding: 1.3rem;
  /* border-top-left-radius: 1.3rem;
  border-top-right-radius: 1.3rem; */
}

.desktop-navbar-item:hover {
  color: var(--global-color-60);
  background-color: var(--global-color-10-contrast);
}

.router-link-exact-active {
  color: var(--global-color-10);
}
</style>
