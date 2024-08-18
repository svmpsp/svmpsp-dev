<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();

const props = defineProps({
  navBarId: String,
  navElementClass: String,
});

const navItems = [
  { id: "navbar-home", title: "Home", to: "index" },
  {
    id: "navbar-about",
    title: "About",
    to: "about",
  },
  {
    id: "navbar-learn",
    title: "Learn",
    to: "learn",
  },
];
</script>

<template>
  <ul :id="props.navBarId" :key="route.name">
    <NuxtLinkLocale v-for="item in navItems" :to="item.to">
      <li :class="props.navElementClass" :key="item.id">
        {{ item.title }}
      </li>
    </NuxtLinkLocale>
  </ul>
</template>

<style></style>
