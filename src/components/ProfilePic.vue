<template>
  <div id="profile-pic-box">
    <NuxtImg src="/eleph.jpeg" />
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

#profile-pic-box img {
  border-radius: 50%;
  width: 250px;
  height: 250px;
}
</style>
