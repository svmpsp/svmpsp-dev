<script setup lang="ts">
const route = useRoute()
console.log("stupid:", route.name)
const navBarItems = ref(null)

// TODO: fix onMounted doesn't run
// on page swaps

onMounted(()=>{
  if (navBarItems.value && route.name) {
    let activeItemId: string
    switch (route.name) {
      case "index":
        activeItemId = "navbar-home"
        break;
      case "about":
        activeItemId = "navbar-about"
        break;
      case "blog":
        activeItemId = "navbar-blog"
        break;
      case "contacts":
        activeItemId = "navbar-contacts"
        break;
      case "courses":
        activeItemId = "navbar-courses"
        break;

      default:
        activeItemId = "invalid"
    }
    const navItem = document.getElementById(activeItemId) as HTMLDivElement
    const documentStyles = getComputedStyle(document.documentElement)
    navItem.style.color = documentStyles.getPropertyValue("--global-color-10")
  }

})

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