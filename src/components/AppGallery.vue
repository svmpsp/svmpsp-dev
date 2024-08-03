<script setup lang="ts">
</script>

<template>
  <div id="app-container">
    <a href="/snake">
      <div class="app-card">
        <div>SNAKE</div>
      </div>
    </a>
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
#app-container a {
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
  background-color: var(--app-card-bg-color);
  border: 0.15rem solid var(--app-card-border-color);
  border-radius: 1rem;
  box-shadow: 5px 5px 5px var(--app-card-shadow-color);
  color: var(--app-card-color);
  display: flex;
  font-size: var(--app-card-font-size);
  font-style: bold;
  height: 200px;
  justify-content: space-around;
  width: 200px;
}

.app-card:hover {
  border: 0.15rem solid var(--app-card-hover-border-color);
  box-shadow: 5px 5px 5px grey;
}

</style>