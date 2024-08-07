<script setup lang="ts">
const route = useRoute();
const locale = route.params.locale;

function getActiveRouteId(): string {
  switch (route.name) {
    case "index":
      return "navbar-home";
    case "about":
      return "navbar-about";
    case "blog":
      return "navbar-blog";
    case "contacts":
      return "navbar-contacts";
    case "courses":
      return "navbar-courses";
    default:
      return "invalid";
  }
}

const navItems = [
  { id: "navbar-home", title: "Home", to: "/", activeClass: "not-active" },
  {
    id: "navbar-about",
    title: "About",
    to: `/${locale}/about`,
    activeClass: "not-active",
  },
  {
    id: "navbar-courses",
    title: "Courses",
    to: `/${locale}/learn`,
    activeClass: "not-active",
  },
  {
    id: "navbar-blog",
    title: "Blog",
    to: `/${locale}/blog`,
    activeClass: "not-active",
  },
  {
    id: "navbar-contacts",
    title: "Contacts",
    to: `/${locale}/contacts`,
    activeClass: "not-active",
  },
];

function setActiveNavItem() {
  const activeRouteId = getActiveRouteId();
  for (const item of navItems) {
    if (item.id === activeRouteId) {
      item["activeClass"] = "is-active";
    } else {
      item["activeClass"] = "not-active";
    }
  }
}
setActiveNavItem();

watch(() => route.name, setActiveNavItem);
</script>

<template>
  <div id="navbar-box">
    <div id="navbar-items" ref="navBarItems" :key="route.name">
      <NuxtLink v-for="item in navItems" :to="item.to">
        <div class="navbar-item" :class="item.activeClass" :key="item.id">
          {{ item.title }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
#navbar-box {
  display: flex;
  flex-direction: row;
}

#navbar-box a,
#navbar-box a:visited,
#navbar-box a:hover,
#navbar-box a:active {
  color: inherit;
  text-decoration: none;
}

#navbar-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--navbar-item-font-size);
  margin: 0;
}

.navbar-item {
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
}
</style>
