<script setup lang="ts">
const route = useRoute()
const routeRef = ref(route.path)

// FIXME: route does not update active item
watch(routeRef, () => {
  const activeItemId = getActiveIdFromRoute(routeRef.value)
  console.log("active is:", activeItemId)
  const documentStyles = getComputedStyle(document.documentElement)
  const activeNavElem = document.getElementById(activeItemId)
  if (activeNavElem) {
    activeNavElem.style.color = documentStyles.getPropertyValue("--global-color-10")
  }
})

function getActiveIdFromRoute(route: string): string {
  switch (route) {
    case "index":
      return "navbar-home"
    case "about":
      return "navbar-about"
    case "blog":
      return "navbar-blog"
    case "contacts":
      return "navbar-contacts"
    case "courses":
      return "navbar-courses"
    default:
      return "invalid"
  }
}
</script>

<template>
  <div id="navbar-box">
    <div id="navbar-items" ref="navBarItems">
      <NuxtLink to="/">
        <div class="navbar-item" id="navbar-home">Home</div>
      </NuxtLink>
      <NuxtLink to="/about">
        <div class="navbar-item" id="navbar-about">About</div>
      </NuxtLink>
      <NuxtLink to="/courses">
        <div class="navbar-item" id="navbar-courses">Courses</div>
      </NuxtLink>
      <NuxtLink to="/blog">
        <div class="navbar-item" id="navbar-blog">Blog</div>
      </NuxtLink>
      <NuxtLink to="/contacts">
        <div class="navbar-item" id="navbar-contacts">Contacts</div>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
#navbar-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  font-size: 1.6rem;
}

.navbar-item {
  padding: 1.3rem;
  border-top-left-radius: 1.3rem;
  border-top-right-radius: 1.3rem;
}

.navbar-item:hover {
  background-color: var(--global-color-10-contrast);
}

</style>