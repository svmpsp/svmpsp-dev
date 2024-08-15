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
    id: "navbar-courses",
    title: "Courses",
    to: "learn",
  },
  {
    id: "navbar-contacts",
    title: t("mainHeaderContacts"),
    to: "contacts",
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

<style>
#navbar-desktop {
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--navbar-item-font-size);
  margin: 0;
}

/* .navbar-item {
  padding: 1.3rem;
  border-top-left-radius: 1.3rem;
  border-top-right-radius: 1.3rem;
}
.navbar-item.is-active {
  color: var(--global-color-10);
}

.navbar-item:hover {
  color: var(--global-color-60);
  background-color: var(--global-color-10-contrast);
} */
</style>
