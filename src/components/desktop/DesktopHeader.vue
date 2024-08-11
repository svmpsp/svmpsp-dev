<script setup lang="ts"></script>

<template>
  <div class="header" id="desktop-header">
    <div class="margins">
      <div id="logo">Sivam Pasupathipillai - svmpsp.dev</div>
      <NavBar
        nav-bar-id="desktop-navbar"
        nav-element-class="desktop-navbar-item"
      />
    </div>
  </div>
</template>

<style>
#desktop-header #logo {
  font-size: 2rem;
  padding: var(--header-title-padding) 0;
}

#desktop-navbar {
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
}

.desktop-navbar-item {
  font-size: 1.5rem;
  list-style-type: none;
  padding: 1.3rem;
  border-top-left-radius: 1.3rem;
  border-top-right-radius: 1.3rem;
}

.desktop-navbar-item:hover {
  color: var(--global-color-60);
  background-color: var(--global-color-10-contrast);
}

.router-link-exact-active {
  color: var(--global-color-10);
}
</style>
