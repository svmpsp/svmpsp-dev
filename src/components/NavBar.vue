<template>
  <div id="navbar-box">
    <div id="navbar-items">
      <div class="navbar-item">About</div>
      <div class="navbar-item">Portfolio</div>
      <div class="navbar-item">Courses</div>
      <div class="navbar-item">Blog</div>
      <div class="navbar-item">Contacts</div>
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
  color: var(--global-color-10);
}

</style>