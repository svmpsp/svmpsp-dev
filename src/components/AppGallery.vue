<script setup lang="ts">
const route = useRoute();
const { locale } = route.params;

const apps = [{ title: "Snake", link: "snake" }];

// TODO: add AppCard.vue component
</script>

<template>
  <div id="app-container" class="merriweather-regular">
    <div class="app-card" v-for="app in apps">
      <NuxtLinkLocale :to="app.link">
        <div>{{ app.title }}</div>
      </NuxtLinkLocale>
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
  margin: 0 auto;
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
