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
#desktop-header {
  background-color: var(--color-main-accent);
  border-bottom: var(--border-header-width) solid
    var(--color-main-accent-contrast);
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
  border-top: var(--header-border-width) solid var(--color-main-accent-contrast);
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
}

.desktop-navbar-item {
  font-size: var(--main-contents-header-subtitle-font-size);
  font-weight: var(--main-contents-font-weight);
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
