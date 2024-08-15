<script setup lang="ts">
const props = defineProps(["link", "title"]);
</script>

<template>
  <NuxtLinkLocale :to="props.link">
    <div class="app-card">
      <div>{{ props.title }}</div>
    </div>
  </NuxtLinkLocale>
</template>

<style>
.app-card {
  align-items: center;
  color: var(--color-main-lighter);
  background: linear-gradient(
    var(--app-card-bg-color),
    var(--color-main-contrast)
  );
  border-radius: 1rem;
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
  box-shadow: 5px 5px 5px var(--app-card-shadow-color);
}
</style>
