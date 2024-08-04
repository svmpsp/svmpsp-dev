<script setup lang="ts">
const route = useRoute()

const navBarItems = ref(null)

const routeIdMappings = {
  index: "navbar-home"
}

onMounted(()=>{
  if (navBarItems.value && route.name) {
    let activeItemId: string
    switch (route.name) {
      case "index":
        activeItemId = "navbar-home"
        break;
      default:
        activeItemId = "invalid"
    }
    const navItem = document.getElementById(activeItemId) as HTMLDivElement
    const documentStyles = getComputedStyle(document.documentElement)
    navItem.style.backgroundColor = documentStyles.getPropertyValue("--global-color-10-contrast")
  }

})

</script>

<template>
  <div id="navbar-box">
    <div id="navbar-items" ref="navBarItems">
      <div class="navbar-item" id="navbar-home">Home</div>
      <div class="navbar-item" ref="navbar-about">About</div>
      <div class="navbar-item" id="navbar-portfolio">Portfolio</div>
      <div class="navbar-item" id="navbar-courses">Courses</div>
      <div class="navbar-item" id="navbar-blog">Blog</div>
      <div class="navbar-item" id="navbar-contacts">Contacts</div>
    </div>
  </div>
</template>

<style>
#navbar-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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