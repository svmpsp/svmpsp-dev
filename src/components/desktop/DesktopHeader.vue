<script setup lang="ts"></script>

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
      <NavBar
        nav-bar-id="desktop-navbar"
        nav-element-class="desktop-navbar-item"
      />
    </div>
  </div>
</template>

<style>
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
  border-top: var(--header-border-width) solid var(--color-main-accent-contrast);
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  list-style-type: none;
}

.desktop-navbar-item {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1.3rem;
}

.desktop-navbar-item:hover {
  /* color: var(--color-main-darker); */
  background-color: var(--color-main-accent-contrast);
}

#desktop-navbar .router-link-exact-active {
  text-decoration: underline var(--color-main-accent-contrast);
  text-decoration-thickness: var(--border-header-width);
  /* color: var(--color-main-alert); */
}
</style>
