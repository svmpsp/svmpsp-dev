<script setup lang="ts">
</script>

<template>
  <div id="app-container" class="merriweather-regular">
    <NuxtLink to="/snake">
      <div class="app-card">
        <div>SNAKE</div>
      </div>
    </NuxtLink>
    <div class="app-card">
      <div>PYTHON</div>
    </div>
    <div class="app-card">
      <div>MACHINE LEARNING</div>
    </div>
    <div class="app-card">
      <div>LOREM IPSUM</div>
    </div>
  </div>
</template>

<style>

#app-container a,
#app-container a:visited,
#app-container a:hover,
#app-container a:active {
  color: inherit;
  text-decoration: none;
}

#app-container {
  column-gap: var(--general-box-padding);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: var(--general-box-padding);
  row-gap: var(--general-box-padding);
}

.app-card {
  align-items: center;
  color: var(--global-color-60);
  background-color: var(--app-card-bg-color);
  border: 5px solid var(--app-card-border-color);
  border-radius: 1rem;
  box-shadow: 3px 3px 3px var(--app-card-shadow-color);
  display: flex;
  font-size: var(--app-card-font-size);
  font-weight: bold;
  height: 200px;
  justify-content: space-around;
  text-align: center;
  width: 200px;
}

.app-card:hover {
  background-color: var(--global-color-10-contrast);
  border: 5px solid var(--app-card-hover-border-color);
  box-shadow: 5px 5px 5px var(--app-card-shadow-color);
}

</style>