<template>
  <div id="header-bar">
    <div class="margins">
      <div id="logo">Sivam Pasupathipillai - svmpsp.dev</div>
      <NavBar />
    </div>
  </div>
</template>

<style>
#header-bar {
  background-color: var(--global-color-30);
  color: var(--global-color-60);
  text-align: left;
  width: 100%;
  border-bottom: var(--header-border-width) solid
    var(--global-color-10-contrast);

  font-family: "Karla", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

#logo {
  font-size: var(--header-title-font-size);
  padding: var(--header-title-padding) 0;
}
</style>
