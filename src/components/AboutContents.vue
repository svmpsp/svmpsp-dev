<script setup lang="ts">
const { $viewport } = useNuxtApp();
useHead({
  title: "About",
});
</script>

<template>
  <div id="about-contents">
    <ProfilePic />
    <p>
      I am a data scientist and software engineer hailing from Italy. I enjoy
      building elegant, robust and maintainable software & AI systems.
    </p>
    <p>
      My tech toolkit includes: Python, deep learning, LLM, distributed systems,
      Big Data technologies, linux, Typescript, gRPC, web development and more.
    </p>
  </div>
</template>

<style>
#about-contents {
  padding: 1rem;
}

#about-contents h2 {
  text-align: center;
}

#about-contents p {
  font-size: 1.2rem;
}
</style>
