<template>
  <div id="profile-pic-box">
    <NuxtImg src="/fox.jpg" />
  </div>
</template>

<style>
#profile-pic-box {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 1rem;
}

#profile-pic {
  height: 240px;
  width: 240px;
}
</style>
