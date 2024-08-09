<script setup lang="ts">
const props = defineProps(["link", "title"]);
</script>

<template>
  <div class="app-card">
    <NuxtLinkLocale :to="props.link">
      <div>{{ props.title }}</div>
    </NuxtLinkLocale>
  </div>
</template>

<style>
.app-card {
  align-items: center;
  color: var(--global-color-60);
  background: linear-gradient(
    var(--app-card-bg-color),
    var(--global-color-10-contrast)
  );
  border: 3px solid var(--app-card-border-color);
  border-radius: 0.8rem;
  box-shadow: 3px 3px 3px var(--app-card-shadow-color);
  display: flex;
  font-size: var(--app-card-font-size);
  height: 200px;
  justify-content: space-around;
  text-align: center;
  width: 200px;
}

.app-card:hover {
  background: linear-gradient(
    var(--global-color-10-contrast),
    var(--app-card-bg-color)
  );
  border: 3px solid var(--app-card-bg-color);
  box-shadow: 5px 5px 5px var(--app-card-shadow-color);
}
</style>
