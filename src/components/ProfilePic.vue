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
  margin: 0 1.5rem;
}

#if-desktop #profile-pic-box img {
  width: 25vw;
  height: 25vw;
}

#profile-pic-box img {
  border-radius: 50%;
}
</style>
